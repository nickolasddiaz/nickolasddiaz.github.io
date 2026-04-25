import os
import sqlite3
import sys

from langchain_community.tools import TavilySearchResults
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
from langchain_core.messages import ToolMessage
from langgraph.checkpoint.sqlite import SqliteSaver
from uuid import uuid4
from langchain_core.messages import AnyMessage, SystemMessage, HumanMessage
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings

settings = Settings()


conn = sqlite3.connect(":memory:", check_same_thread=False)
memory = SqliteSaver(conn)

"""
    In previous examples we've annotated the `messages` state key
    with the default `operator.add` or `+` reducer, which always
    appends new messages to the end of the existing messages array.
    
    Now, to support replacing existing messages, we annotate the
    `messages` key with a customer reducer function, which replaces
    messages with the same `id`, and appends them otherwise.
"""

def reduce_messages(left: list[AnyMessage], right: list[AnyMessage]) -> list[AnyMessage]:
    # assign ids to messages that don't have them
    for message in right:
        if not message.id:
            message.id = str(uuid4())
    # merge the new messages with the existing messages
    merged = left.copy()
    for message in right:
        for i, existing in enumerate(merged):
            # replace any existing messages with the same id
            if existing.id == message.id:
                merged[i] = message
                break
        else:
            # append any new messages to the end
            merged.append(message)
    return merged

class AgentState(TypedDict):
    messages: Annotated[list[AnyMessage], reduce_messages]


tool = TavilySearchResults(max_results=2)


class Agent:
    def __init__(self, model, tools, system="", checkpointer=None):
        self.system = system
        graph = StateGraph(AgentState)
        graph.add_node("llm", self.call_openai)
        graph.add_node("action", self.take_action)
        graph.add_conditional_edges("llm", self.exists_action, {True: "action", False: END})
        graph.add_edge("action", "llm")
        graph.set_entry_point("llm")
        self.graph = graph.compile(
            checkpointer=checkpointer,
            interrupt_before=["action"]
        )
        self.tools = {t.name: t for t in tools}
        self.model = model.bind_tools(tools)

    def call_openai(self, call_state: AgentState):
        call_messages = call_state['messages']
        if self.system:
            call_messages = [SystemMessage(content=self.system)] + call_messages
        message = self.model.invoke(call_messages)
        return {'messages': [message]}

    @staticmethod
    def exists_action(exist_state: AgentState):
        settings.print(exist_state)
        result = exist_state['messages'][-1]
        return len(result.tool_calls) > 0

    def take_action(self, take_state: AgentState):
        tool_calls = take_state['messages'][-1].tool_calls
        results = []
        for t in tool_calls:
            settings.print(f"Calling: {t}")
            result = self.tools[t['name']].invoke(t['args'])
            results.append(ToolMessage(tool_call_id=t['id'], name=t['name'], content=str(result)))
        settings.print("Back to the model!")
        return {'messages': results}



prompt = """You are a smart research assistant. Use the search engine to look up information. \
You are allowed to make multiple calls (either together or in sequence). \
Only look up information when you are sure of what you want. \
If you need to look up some information before asking a follow up question, you are allowed to do that!
"""
settings.print(prompt)
abot = Agent(settings.client_ChatOpenAI, [tool], system=prompt, checkpointer=memory)

messages = [HumanMessage(content="Whats the weather in SF?")]
thread = {"configurable": {"thread_id": "1"}}
settings.print(messages, thread)
for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)


settings.print(abot.graph.get_state(thread))
settings.print(abot.graph.get_state(thread).next)

for event in abot.graph.stream(None, thread):
    for v in event.values():
        settings.print(v)

settings.print(abot.graph.get_state(thread))
settings.print(abot.graph.get_state(thread).next)

messages = [HumanMessage("Whats the weather in LA?")]
thread = {"configurable": {"thread_id": "2"}}
settings.print(messages, thread)
for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)
while abot.graph.get_state(thread).next:
    settings.print("\n", abot.graph.get_state(thread),"\n")
    _input = input("proceed?")
    if _input != "y":
        settings.print("aborting")
        break
    for event in abot.graph.stream(None, thread):
        for v in event.values():
            settings.print(v)


messages = [HumanMessage("Whats the weather in LA?")]
thread = {"configurable": {"thread_id": "3"}}
settings.print(messages, thread)

for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)

settings.print(abot.graph.get_state(thread))
current_values = abot.graph.get_state(thread)
settings.print(current_values.values['messages'][-1])
settings.print(current_values.values['messages'][-1].tool_calls)
_id = current_values.values['messages'][-1].tool_calls[0]['id']
current_values.values['messages'][-1].tool_calls = [
    {'name': 'tavily_search_results_json',
  'args': {'query': 'current weather in Louisiana'},
  'id': _id}
]
settings.print(current_values.values)

abot.graph.update_state(thread, current_values.values)
abot.graph.get_state(thread)
for event in abot.graph.stream(None, thread):
    for v in event.values():
        settings.print(v)

states = []
for state in abot.graph.get_state_history(thread):
    settings.print(state)
    settings.print('--')
    states.append(state)

to_replay = states[-3]
settings.print(to_replay)
for event in abot.graph.stream(None, to_replay.config):
    for k, v in event.items():
        print(v)

settings.print(to_replay)
_id = to_replay.values['messages'][-1].tool_calls[0]['id']
to_replay.values['messages'][-1].tool_calls = [{'name': 'tavily_search_results_json',
  'args': {'query': 'current weather in LA, accuweather'},
  'id': _id}]

branch_state = abot.graph.update_state(to_replay.config, to_replay.values)
for event in abot.graph.stream(None, branch_state):
    for k, v in event.items():
        if k != "__end__":
            settings.print(v)

settings.print(to_replay)
_id = to_replay.values['messages'][-1].tool_calls[0]['id']
state_update = {"messages": [ToolMessage(
    tool_call_id=_id,
    name="tavily_search_results_json",
    content="54 degree Celsius",
)]}
branch_and_add = abot.graph.update_state(
    to_replay.config,
    state_update,
    as_node="action")

for event in abot.graph.stream(None, branch_and_add):
    for k, v in event.items():
        settings.print(v)

