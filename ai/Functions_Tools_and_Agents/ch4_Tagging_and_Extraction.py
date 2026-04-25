import os
import sys
from typing import List, Optional

from langchain_core.output_parsers import JsonOutputToolsParser
from pydantic import BaseModel, Field
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import WebBaseLoader
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings
settings = Settings()
model = settings.client_ChatOpenAI

# ---------- Tagging ----------
class Tagging(BaseModel):
    """Tag the piece of text with particular info."""
    sentiment: str = Field(description="sentiment of text, should be `pos`, `neg`, or `neutral`")
    language: str = Field(description="language of text (ISO 639-1 code)")

prompt = ChatPromptTemplate.from_messages([
    ("system", "Think carefully, and then tag the text as instructed"),
    ("user", "{input}")
])

tagging_model = model.bind_tools([Tagging], tool_choice="Tagging")
tagging_chain = prompt | tagging_model
settings.print("--- Tagging (Raw Output) ---")
settings.print(tagging_chain.invoke({"input": "I love langchain"}))

# Parse to JSON (tools parser, not functions parser)
tagging_chain_json = prompt | tagging_model | JsonOutputToolsParser()
settings.print("\n--- Tagging (Parsed) ---")
settings.print(tagging_chain_json.invoke({"input": "non mi piace questo cibo"}))

# ---------- Extraction ----------
class Person(BaseModel):
    """Information about a person."""
    name: str
    age: Optional[int] = None

class Information(BaseModel):
    """Information to extract."""
    people: List[Person]

extraction_model = model.bind_tools([Information], tool_choice="Information")
extract_prompt = ChatPromptTemplate.from_messages([
    ("system", "Extract the relevant information, if not explicitly provided do not guess. Extract partial info"),
    ("human", "{input}")
])

extraction_chain = extract_prompt | extraction_model | JsonOutputToolsParser()
settings.print("\n--- Extraction (Full Object) ---")
settings.print(extraction_chain.invoke({"input": "Joe is 30, his mom is Martha"}))

# If you want only the "people" list back:
# FIXED: Replaced JsonOutputFunctionsParser with JsonOutputToolsParser
extraction_chain_people = extract_prompt | extraction_model | JsonOutputToolsParser(key_name="people")
settings.print("\n--- Extraction (People Key Only) ---")
settings.print(extraction_chain_people.invoke({"input": "Joe is 30, his mom is Martha"}))

# ---------- Web doc + overview tagging ----------
loader = WebBaseLoader("https://lilianweng.github.io/posts/2023-06-23-agent/")
documents = loader.load()
doc = documents[0]
page_content = doc.page_content[:10000]

class Overview(BaseModel):
    """Overview of a section of text."""
    summary: str
    language: str
    keywords: str

overview_model = model.bind_tools([Overview], tool_choice="Overview")
overview_prompt = ChatPromptTemplate.from_messages([
    ("system", "Think carefully, then produce an overview per the schema."),
    ("human", "{input}")
])
overview_chain = overview_prompt | overview_model | JsonOutputToolsParser()
settings.print("\n--- Web Doc Overview ---")
settings.print(overview_chain.invoke({"input": page_content}))

# ---------- Paper extraction ----------
class Paper(BaseModel):
    """Information about papers mentioned."""
    title: str
    author: Optional[str] = None

class Info(BaseModel):
    """Information to extract"""
    papers: List[Paper]

paper_model = model.bind_tools([Info], tool_choice="Info")
paper_prompt = ChatPromptTemplate.from_messages([
    ("system", """An article will be passed to you. Extract from it all papers that are mentioned by this article followed by its author.
Do not extract the name of the article itself. If no papers are mentioned, return an empty list.
Do not make up or guess ANY extra information. Only extract what exactly is in the text."""),
    ("human", "{input}")
])

# FIXED: Replaced JsonOutputFunctionsParser with JsonOutputToolsParser
paper_chain = paper_prompt | paper_model | JsonOutputToolsParser(key_name="papers")
settings.print("\n--- Paper Extraction (From Content) ---")
settings.print(paper_chain.invoke({"input": page_content}))
settings.print("\n--- Paper Extraction (From 'hi') ---")
settings.print(paper_chain.invoke({"input": "hi"}))  # should return []

# ---------- Chunking + map ----------
text_splitter = RecursiveCharacterTextSplitter(chunk_overlap=0)
splits = text_splitter.split_text(doc.page_content)

def flatten(matrix):
    flat_list = []
    for row in matrix:
        flat_list += row
    return flat_list

prep = RunnableLambda(lambda x: [{"input": s} for s in text_splitter.split_text(x)])
chain = prep | paper_chain.map() | flatten
settings.print("\n--- Mapped Paper Extraction ---")
settings.print(chain.invoke(doc.page_content))