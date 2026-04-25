import os
import sys

from langchain_core.tools import tool
from pydantic import BaseModel, Field
from langchain_core.prompts import ChatPromptTemplate

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings
settings = Settings()

@tool
class WeatherSearch(BaseModel):
    """Call this with an airport code to get the weather at that airport"""
    airport_code: str = Field(description="airport code to get weather for")


prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant"),
    ("user", "{input}")
])

tools = [WeatherSearch]
model_with_tools = settings.client_ChatOpenAI.bind_tools(tools)

chain = prompt | model_with_tools

message = "what is the weather in sf?"
settings.print(message)
settings.print(chain.invoke({"input": message}))

