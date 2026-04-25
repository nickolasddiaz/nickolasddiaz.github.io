# panel serve GUI_Conversational_agent.py
import datetime
import operator
from typing import Annotated, TypedDict, List
import sys
import os

import requests
import wikipedia
from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage, ToolMessage
from langchain_core.tools import tool
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver
import panel as pn
import param
from pydantic import BaseModel, Field
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_community.agent_toolkits.file_management.toolkit import FileManagementToolkit

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings, MODELS


working_directory = "./workspace"
os.makedirs(working_directory, exist_ok=True)

toolkit = FileManagementToolkit(root_dir=working_directory)
file_tools = toolkit.get_tools()

pn.extension()
settings = Settings()
model = settings.client_ChatOpenAI

# --- Tool Definitions ---
class OpenMeteoInput(BaseModel):
    latitude: float = Field(..., description="Latitude of the location")
    longitude: float = Field(..., description="Longitude of the location")

# --- Define Tools ---
@tool(args_schema=OpenMeteoInput)
def get_current_temperature(latitude: float, longitude: float) -> str:
    """Fetch current temperature for given coordinates."""
    BASE_URL = "https://api.open-meteo.com/v1/forecast"
    params = {
        'latitude': latitude,
        'longitude': longitude,
        'hourly': 'temperature_2m',
        'forecast_days': 1,
    }
    response = requests.get(BASE_URL, params=params)
    response.raise_for_status()

    results = response.json()
    current_utc_time = datetime.datetime.now(datetime.timezone.utc)
    time_list = [datetime.datetime.fromisoformat(t.replace('Z', '+00:00')) for t in results['hourly']['time']]
    temp_list = results['hourly']['temperature_2m']

    # Make current_utc_time naive
    if current_utc_time.tzinfo is not None:
        current_utc_time = current_utc_time.replace(tzinfo=None)

    closest_idx = min(range(len(time_list)), key=lambda i: abs(time_list[i] - current_utc_time))

    output = f"The current temperature is {temp_list[closest_idx]}°C"

    settings.print(f"get_current_temperature: {output}")
    return output


@tool
def search_wikipedia(query: str) -> str:
    """Run Wikipedia search and get page summaries."""
    page_titles = wikipedia.search(query)
    summaries = []
    for page_title in page_titles[:3]:
        try:
            wiki_page = wikipedia.page(title=page_title, auto_suggest=False)
            summaries.append(f"Page: {page_title}\nSummary: {wiki_page.summary}")
        except Exception as e:
            settings.print("Error from search_wikipedia",e)

    output = "\n\n".join(summaries) if summaries else "No results found."
    settings.print(f"[VERBOSE] Wikipedia found {len(summaries)} results.")
    return output

@tool
def reverse_string(query: str) -> str:
    """This function reverses the input string."""
    settings.print("reverse_string:", query)
    return query[::-1]


@tool
def ask_another_ai(query: str)-> str:
    """Ask GPT_4o_mini your friend (stateless does remember)"""
    chat_completion = settings.client_OpenAI.chat.completions.create(
        model=MODELS.GPT_4o_mini.value,
        messages=[{"role": "user", "content": query}]
    )
    settings.print("ask_another_ai:", query)
    settings.print("response:", chat_completion.choices[0].message.content)
    return chat_completion.choices[0].message.content

@tool
def among_us(query: str) -> str:
    """turn text into among us brain rot"""
    chat_completion = settings.client_OpenAI.chat.completions.create(
        model=MODELS.GPT_4o_mini.value,
        messages=[{"role": "user", "content": query}]
    )
    settings.print("ask_another_ai:", f"translate the current message to among us brain rot use ඞ emoji: /{query}/")
    settings.print("response:", chat_completion.choices[0].message.content)
    return chat_completion.choices[0].message.content



# --- Define State ---
class AgentState(TypedDict):
    messages: Annotated[List[BaseMessage], operator.add]


# --- Main Class ---
class LangGraphChat(param.Parameterized):
    chat_interface = param.ClassSelector(class_=pn.chat.ChatInterface)

    def __init__(self, tools, **params):
        super().__init__(**params)
        self.model = settings.client_ChatOpenAI
        self.tools = tools
        self.model_with_tools = model.bind_tools(tools)

        # COMPLETE MAPPING: Map tool names to actual functions dynamically
        self.tool_map = {t.name: t for t in tools}

        # Initialize Memory (Checkpointer)
        self.memory = MemorySaver()

        # Build Graph
        workflow = StateGraph(AgentState)
        workflow.add_node("agent", self.call_model)
        workflow.add_node("tools", self.run_tools)
        workflow.set_entry_point("agent")

        workflow.add_conditional_edges(
            "agent",
            self.should_continue,
            {"tools": "tools", "end": END},
        )
        workflow.add_edge("tools", "agent")

        # Compile with memory so conversation persists
        self.app = workflow.compile(checkpointer=self.memory)

    def call_model(self, state: AgentState):
        system_prompt = SystemMessage(content="You are helpful but sassy assistant.")
        messages = state["messages"]

        # Ensure system prompt is first
        if not isinstance(messages[0], SystemMessage):
            messages = [system_prompt] + messages

        response = self.model_with_tools.invoke(messages)
        return {"messages": [response]}

    def run_tools(self, state: AgentState):
        messages = state["messages"]
        last_message = messages[-1]
        tool_results = []

        for tool_call in last_message.tool_calls:
            # Send status update to the UI
            if self.chat_interface:
                self.chat_interface.send(
                    f"Running tool: `{tool_call['name']}`...",
                    user="System",
                    respond=False,
                    avatar="⚙️"
                )

            # Use dynamic mapping instead of hardcoding
            selected_tool = self.tool_map.get(tool_call["name"])

            if selected_tool:
                tool_output = selected_tool.invoke(tool_call["args"])
                tool_results.append(
                    ToolMessage(
                        tool_call_id=tool_call["id"],
                        name=tool_call["name"],
                        content=str(tool_output)
                    )
                )
            else:
                tool_results.append(
                    ToolMessage(
                        tool_call_id=tool_call["id"],
                        name=tool_call["name"],
                        content=f"Error: Tool {tool_call['name']} not found."
                    )
                )

        return {"messages": tool_results}

    def should_continue(self, state: AgentState):
        last_message = state["messages"][-1]
        if last_message.tool_calls:
            return "tools"
        return "end"


    # --- Panel Callback ---
    async def process_input(self, contents: str, user: str, instance: pn.chat.ChatInterface):
        """
        This is the standard callback format for pn.chat.ChatInterface
        """
        # Save the instance so other methods can post status updates
        self.chat_interface = instance

        config = {"configurable": {"thread_id": "panel_session_1"}}

        # Invoke the graph with the NEW message only.
        # The MemorySaver handles the previous history.
        final_state = await self.app.ainvoke(
            {"messages": [HumanMessage(content=contents)]},
            config=config
        )

        # Return the content of the last message (the AI response)
        return final_state['messages'][-1].content


    # --- Initialization ---
tools = [get_current_temperature, search_wikipedia, reverse_string,
         DuckDuckGoSearchRun(), ask_another_ai, among_us]

tools.extend(file_tools)

cb = LangGraphChat(tools)

    # --- UI Setup ---

    # Define the ChatInterface
chat_interface = pn.chat.ChatInterface(
        callback=cb.process_input,
        callback_user="LangGraph Agent",
        show_rerun=False,
        show_undo=False,
        show_clear=True,
        avatar="🤖",
        callback_exception='verbose'
    )

    # Create the Dashboard
dashboard = pn.template.FastListTemplate(
        title="Conversational Agent",
        main=[chat_interface],
        accent="#d45200",
        header_background="#d45200"
    )

dashboard.servable()