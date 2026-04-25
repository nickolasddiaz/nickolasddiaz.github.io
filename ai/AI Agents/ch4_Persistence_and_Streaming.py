import asyncio
import os
import sys

import aiosqlite
import sqlite3

from langgraph.checkpoint.sqlite.aio import AsyncSqliteSaver
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated
import operator
from langchain_core.messages import AnyMessage, SystemMessage, HumanMessage, ToolMessage
from langchain_tavily import TavilySearch
from langgraph.checkpoint.sqlite import SqliteSaver
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings

settings = Settings()


tool = TavilySearch(max_results=2)

class AgentState(TypedDict):
    messages: Annotated[list[AnyMessage], operator.add]


conn = sqlite3.connect(":memory:", check_same_thread=False)
checkpointer = SqliteSaver(conn)


class Agent:
    def __init__(self, model, tools, agent_checkpointer, system=""):
        self.system = system
        graph = StateGraph(AgentState)
        graph.add_node("llm", self.call_openai)
        graph.add_node("action", self.take_action)
        graph.add_conditional_edges("llm", self.exists_action, {True: "action", False: END})
        graph.add_edge("action", "llm")
        graph.set_entry_point("llm")
        self.graph = graph.compile(checkpointer=agent_checkpointer)
        self.tools = {t.name: t for t in tools}
        self.model = model.bind_tools(tools)

    def call_openai(self, state: AgentState):
        call_messages = state['messages']
        if self.system:
            call_messages = [SystemMessage(content=self.system)] + call_messages
        message = self.model.invoke(call_messages)
        return {'messages': [message]}

    @staticmethod
    def exists_action(state: AgentState):
        result = state['messages'][-1]
        return len(result.tool_calls) > 0

    def take_action(self, state: AgentState):
        tool_calls = state['messages'][-1].tool_calls
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

abot = Agent(settings.client_ChatOpenAI, [tool], system=prompt, agent_checkpointer=checkpointer)

messages = [HumanMessage(content="What is the weather in sf?")]
thread = {"configurable": {"thread_id": "1"}}
settings.print(messages, thread)

for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v['messages'])

messages = [HumanMessage(content="What about in la?")]
thread = {"configurable": {"thread_id": "1"}}
settings.print(messages, thread)
for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)

messages = [HumanMessage(content="Which one is warmer?")]
thread = {"configurable": {"thread_id": "1"}}
settings.print(messages, thread)
for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)

messages = [HumanMessage(content="Which one is warmer?")]
thread = {"configurable": {"thread_id": "2"}}
settings.print(messages, thread)
for event in abot.graph.stream({"messages": messages}, thread):
    for v in event.values():
        settings.print(v)


messages = [HumanMessage(content="What is the weather in SF?")]
thread = {"configurable": {"thread_id": "4"}}
settings.print(messages, thread)

async def get_sqlite_saver():
    async_conn = await aiosqlite.connect(":memory:")
    return AsyncSqliteSaver(conn=async_conn)

async def astream_events():
    async_checkpointer = await get_sqlite_saver()
    async_abot = Agent(settings.client_ChatOpenAI, [tool], system=prompt, agent_checkpointer=async_checkpointer)

    async for async_event in async_abot.graph.astream_events({"messages": messages}, thread, version="v2"):
        kind = async_event["event"]
        if kind == "on_chat_model_stream":
            content = async_event["data"]["chunk"].content
            if content:
                settings.print("|".join(content.splitlines()))

asyncio.run(astream_events())