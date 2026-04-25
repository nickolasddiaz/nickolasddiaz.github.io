import os
import sys
from typing import List

from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableMap
from langchain_core.tools import tool
from pydantic import BaseModel

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()


@tool
def weather_search(airport_code: str):
    """Search for weather given an airport code."""
    # Logic to fetch weather would go here
    return f"The weather at {airport_code} is sunny."

@tool
def sports_search(team_name: str):
    """Search for news of recent sport events."""
    # Logic to fetch sports news would go here
    return f"The {team_name} won their game yesterday!"

tools = [weather_search, sports_search]

settings.print(tools)

prompt = ChatPromptTemplate.from_template(
    "tell me a short joke about {topic}"
)

settings.print(prompt)

model = settings.client_ChatOpenAI
output_parser = StrOutputParser()

chain = prompt | model | output_parser
chain.invoke({"topic": "bears"})

vectorstore = DocArrayInMemorySearch.from_texts(
    ["harrison worked at kensho", "bears like to eat honey"],
    embedding=settings.client_client_OpenAIEmbeddings
)
retriever = vectorstore.as_retriever()

retriever.invoke("where did harrison work?")
retriever.invoke("what do bears like to eat")

template = """Answer the question based only on the following context:
{context}

Question: {question}
"""

settings.print(template)

prompt = ChatPromptTemplate.from_template(template)

chain = RunnableMap({
    "context": lambda x: retriever.invoke(x["question"]),
    "question": lambda x: x["question"]
}) | prompt | model | output_parser

chain.invoke({"question": "where did harrison work?"})

inputs = RunnableMap({
    "context": lambda x: retriever.invoke(x["question"]),
    "question": lambda x: x["question"]
})

inputs.invoke({"question": "where did harrison work?"})


prompt = ChatPromptTemplate.from_messages([("human", "{input}")])

model_with_tools = settings.client_ChatOpenAI.bind_tools(tools)

runnable = prompt | model_with_tools

response = runnable.invoke({"input": "how did the patriots do yesterday?"})

settings.print(response.tool_calls)


class Poem(BaseModel):
    title: str
    author: str
    first_line: str

class Poems(BaseModel):
    poems: List[Poem]

structured_llm = settings.client_ChatOpenAI.with_structured_output(Poems)

challenge = "write three poems: title, author, and first line"
result = structured_llm.invoke(challenge)

settings.print(challenge)
settings.print(result.poems)
