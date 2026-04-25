import operator
import os
import sys
from typing import Annotated, TypedDict, List
from langchain_core.messages import BaseMessage, HumanMessage, SystemMessage, ToolMessage
from GUI_Conversational_agent import get_current_temperature, search_wikipedia
from langgraph.graph import StateGraph, END

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
# --- Setup ---
from Settings import Settings
settings = Settings()
model = settings.client_ChatOpenAI

# 1. BIND TOOLS
tools = [get_current_temperature, search_wikipedia]
model_with_tools = model.bind_tools(tools)

settings.print("--- System Setup Complete ---")
settings.print(f"--- Loaded {len(tools)} tools: {[t.name for t in tools]} ---")


# 2. DEFINE STATE (Memory)
class AgentState(TypedDict):
    # 'operator.add' means: when a node returns new messages, append them to this list
    messages: Annotated[List[BaseMessage], operator.add]


# 3. DEFINE NODES
def call_model(state: AgentState):
    """
    Invokes the model with the current history.
    """
    settings.print("\n[NODE: CALL_MODEL] Preparing to call LLM...")

    # Custom system prompt logic
    system_prompt = SystemMessage(content="You are helpful but sassy assistant.")

    # If the history doesn't start with a system prompt, add it
    messages = state["messages"]
    if not isinstance(messages[0], SystemMessage):
        messages = [system_prompt] + messages
    else:
        # Ensure our specific system prompt is the one being used if multiple exist
        messages[0] = system_prompt

    settings.print(f"   [CONTEXT] Sending {len(messages)} messages to model.")
    response = model_with_tools.invoke(messages)

    settings.print(f"   [LLM RESPONSE] Type: {type(response).__name__}")
    if response.tool_calls:
        settings.print(f"   [LLM DECISION] Model decided to call tools: {response.tool_calls}")
    else:
        settings.print(f"   [LLM DECISION] Model responded with text: {response.content}")

    return {"messages": [response]}


def run_tools(state: AgentState):
    """
    Executes the tool calls requested by the model.
    """
    settings.print("\n[NODE: RUN_TOOLS] Executing tool calls...")
    messages = state["messages"]
    last_message = messages[-1]

    tool_results = []

    # Iterate over tool calls requested by the LLM
    for tool_call in last_message.tool_calls:
        settings.print(f"   [PROCESSING] Tool request: {tool_call['name']}")

        # Select the actual python function based on name
        selected_tool = {
            "get_current_temperature": get_current_temperature,
            "search_wikipedia": search_wikipedia
        }[tool_call["name"]]

        # Invoke the tool
        tool_output = selected_tool.invoke(tool_call["args"])

        settings.print(f"   [RESULT] Output: {tool_output}")

        # Create the tool message (this is what the LLM needs to see next)
        tool_results.append(
            ToolMessage(
                tool_call_id=tool_call["id"],
                name=tool_call["name"],
                content=str(tool_output)
            )
        )

    return {"messages": tool_results}


# 4. DEFINE CONDITIONAL LOGIC
def should_continue(state: AgentState):
    """
    Decides if we stop (reply to user) or continue (run tools).
    """
    messages = state["messages"]
    last_message = messages[-1]

    if last_message.tool_calls:
        settings.print("\n[DECISION] Tool calls detected -> Proceeding to 'tools' node.")
        return "tools"

    settings.print("\n[DECISION] No tool calls -> Ending execution.")
    return "end"


# 5. BUILD THE GRAPH
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("agent", call_model)
workflow.add_node("tools", run_tools)

# Set entry point
workflow.set_entry_point("agent")

# Add conditional edges
workflow.add_conditional_edges(
    "agent",
    should_continue,
    {
        "tools": "tools",
        "end": END,
    },
)

# Add standard edge (after tools run, go back to agent to generate final answer)
workflow.add_edge("tools", "agent")

# Compile
app = workflow.compile()


# --- Execution ---

def chat(user_input, thread_id="1"):
    settings.print(f"\n\n==================================================")
    settings.print(f"USER INPUT: {user_input}")
    settings.print(f"==================================================")

    # LangGraph manages memory via 'thread_id' in the config
    config = {"configurable": {"thread_id": thread_id}}

    # Stream events to see what's happening, or just invoke
    final_state = app.invoke(
        {"messages": [HumanMessage(content=user_input)]},
        config=config
    )

    settings.print(f"\n[FINAL RESPONSE]: {final_state['messages'][-1].content}")


# Test Runs (State is preserved via thread_id)
settings.print(chat("my name is bob"))
settings.print(chat("whats my name"))
settings.print("message: ","whats the weather in sf? (Lat 37.77, Long -122.41)")