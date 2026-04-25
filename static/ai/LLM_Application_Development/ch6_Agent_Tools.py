import os
import sys
from datetime import date

from langchain.agents import create_agent
from langchain_classic import hub
from langchain_classic.agents import create_react_agent, AgentExecutor
from langchain_classic.chains.llm_math.base import LLMMathChain
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper
from langchain_core.tools import tool, Tool

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings

settings = Settings()
llm = settings.client_ChatOpenAI

wikipedia = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper())


llm_math = LLMMathChain.from_llm(llm)
calculator = Tool(
    name="Calculator",
    func=llm_math.run,
    description="Useful for mathematical calculations"
)

tools = [calculator, wikipedia]

prompt = hub.pull("hwchase17/react")

agent = create_agent(llm, tools) # des not work with python 3.14
agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    handle_parsing_errors=True,
    verbose=True
)

result = agent_executor.invoke({"input": "What is 25% of 300?"})
print(result)

question = """Tom M. Mitchell is an American computer scientist 
and the Founders University Professor at Carnegie Mellon University (CMU)
what book did he write?"""
result = agent_executor.invoke({"input": question})
settings.print(question)
settings.print(result)

@tool
def get_current_date(text: str) -> str:
    """Returns today's date. Use this for any questions related to knowing today's date.
    The input should always be an empty string, and this function will always return
    today's date - any date mathematics should occur outside this function."""
    return str(date.today())

# Create new agent with custom tool
tools_with_date = [calculator, wikipedia, get_current_date]
agent_with_date = create_react_agent(llm, tools_with_date, prompt)
agent_executor_with_date = AgentExecutor(
    agent=agent_with_date,
    tools=tools_with_date,
    handle_parsing_errors=True,
    verbose=True
)

result = agent_executor_with_date.invoke({"input": "What's the date today?"})
settings.print(result)