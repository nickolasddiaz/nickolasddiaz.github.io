import os
import sys

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter, CharacterTextSplitter, TokenTextSplitter, \
    MarkdownHeaderTextSplitter

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()

chunk_size = 26
chunk_overlap = 4


r_splitter = RecursiveCharacterTextSplitter(
    chunk_size=chunk_size,
    chunk_overlap=chunk_overlap
)
c_splitter = CharacterTextSplitter(
    chunk_size=chunk_size,
    chunk_overlap=chunk_overlap
)


text = 'abcdefghijklmnopqrstuvwxyzabcdefg'
settings.print(f"RecursiveCharacterTextSplitter:{text}:",r_splitter.split_text(text))


text2 = "a b c d e f g h i j k l m n o p q r s t u v w x y z"
settings.print("text:", text2)
settings.print("RecursiveCharacterTextSplitter:",r_splitter.split_text(text2))
settings.print("CharacterTextSplitter:",c_splitter.split_text(text2))

r_splitter = RecursiveCharacterTextSplitter(
    chunk_size=150,
    chunk_overlap=0,
    separators=["\n\n", "\n", "(?<=\. )", " ", ""]
)


some_text = """When writing documents, writers will use document structure to group content. \
This can convey to the reader, which idea's are related. For example, closely related ideas \
are in sentences. Similar ideas are in paragraphs. Paragraphs form a document. \n\n  \
Paragraphs are often delimited with a carriage return or two carriage returns. \
Carriage returns are the "backslash n" you see embedded in this string. \
Sentences have a period at the end, but also, have a space.\
and words are separated by space."""


settings.print(f"RecursiveCharacterTextSplitter:{text}:",r_splitter.split_text(some_text))

loader = PyPDFLoader("./machinelearning-lecture01.pdf")
pages = loader.load()

text_splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=1000,
    chunk_overlap=150,
    length_function=len
)

docs = text_splitter.split_documents(pages)

settings.print("len(docs):",len(docs))
settings.print("len(pages):",len(pages))

text_splitter = TokenTextSplitter(chunk_size=1, chunk_overlap=0)
text1 = "foo bar bazzyfoo"
settings.print(f"TokenTextSplitter: {text1}:",text_splitter.split_text(text1))

markdown_document = """# Title\n\n \
## Chapter 1\n\n \
Hi this is Jim\n\n Hi this is Joe\n\n \
### Section \n\n \
Hi this is Lance \n\n 
## Chapter 2\n\n \
Hi this is Molly"""

headers_to_split_on = [
    ("#", "Header 1"),
    ("##", "Header 2"),
    ("###", "Header 3"),
]

markdown_splitter = MarkdownHeaderTextSplitter(
    headers_to_split_on=headers_to_split_on
)
md_header_splits = markdown_splitter.split_text(markdown_document)

settings.print("Markdown:", markdown_document)
settings.print("headers_to_split_on:", headers_to_split_on)
settings.print("markdown_splitter [0]",md_header_splits[0])
settings.print("markdown_splitter [0]",md_header_splits[1])