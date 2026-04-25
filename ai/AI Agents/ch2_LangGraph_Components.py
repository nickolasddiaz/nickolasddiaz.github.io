import os
import sys

from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator
from langchain_core.messages import AnyMessage, SystemMessage, HumanMessage, ToolMessage
from langchain_tavily import TavilySearch

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings

settings = Settings()


tool = TavilySearch(max_results=4) #increased number of results
settings.print(type(tool))
settings.print(tool.name)

class AgentState(TypedDict):
    messages: Annotated[list[AnyMessage], operator.add]


class Agent:

    def __init__(self, agent_model, tools, system=""):
        self.system = system
        graph = StateGraph(AgentState)
        graph.add_node("llm", self.call_openai)
        graph.add_node("action", self.take_action)
        graph.add_conditional_edges(
            "llm",
            self.exists_action,
            {True: "action", False: END}
        )
        graph.add_edge("action", "llm")
        graph.set_entry_point("llm")
        self.graph = graph.compile()
        self.tools = {t.name: t for t in tools}
        self.model = agent_model.bind_tools(tools)

    @staticmethod
    def exists_action(state: AgentState):
        exists_result = state['messages'][-1]
        return len(exists_result.tool_calls) > 0

    def call_openai(self, state: AgentState):
        call_messages = state['messages']
        if self.system:
            call_messages = [SystemMessage(content=self.system)] + call_messages
        message = self.model.invoke(call_messages)
        return {'messages': [message]}

    def take_action(self, state: AgentState):
        tool_calls = state['messages'][-1].tool_calls
        results = []
        for t in tool_calls:
            settings.print(f"Calling: {t}")
            if not t['name'] in self.tools:      # check for bad tool name from LLM
                settings.print("\n ....bad tool name....")
                take_result = "bad tool name, retry"  # instruct LLM to retry if bad
            else:
                take_result = self.tools[t['name']].invoke(t['args'])
            results.append(ToolMessage(tool_call_id=t['id'], name=t['name'], content=str(take_result)))
        settings.print("Back to the model!")
        return {'messages': results}


prompt = """You are a smart research assistant. Use the search engine to look up information. \
You are allowed to make multiple calls (either together or in sequence). \
Only look up information when you are sure of what you want. \
If you need to look up some information before asking a follow up question, you are allowed to do that!
"""


abot = Agent(settings.client_ChatOpenAI, [tool], system=prompt)

settings.print(abot.graph.get_graph().draw_ascii())


messages = [HumanMessage(content="What is the weather in sf?")]
result = abot.graph.invoke({"messages": messages})

settings.print(result)
settings.print(result['messages'][-1].content)

messages = [HumanMessage(content="What is the weather in SF and LA?")]
result = abot.graph.invoke({"messages": messages})

settings.print(result['messages'][-1].content)

# Note, the query was modified to produce more consistent results.
# Results may vary per run and over time as search information and models change.

query = "Who won the super bowl in 2024? In what state is the winning team headquarters located? \
What is the GDP of that state? Answer each question."
messages = [HumanMessage(content=query)]

abot = Agent(settings.client_ChatOpenAI, [tool], system=prompt)
result = abot.graph.invoke({"messages": messages})

settings.print(result['messages'][-1].content)