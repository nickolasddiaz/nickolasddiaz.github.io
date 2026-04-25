import os
import shutil
import sys
from pathlib import Path

import numpy as np

from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()
embedding = settings.client_client_OpenAIEmbeddings

# Load PDF
loaders = [
    # Duplicate documents on purpose - messy data
    PyPDFLoader("./machinelearning-lecture01.pdf"),
    PyPDFLoader("./machinelearning-lecture01.pdf"),
]
docs = []
for loader in loaders:
    docs.extend(loader.load())


text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 1500,
    chunk_overlap = 150
)

splits = text_splitter.split_documents(docs)

len(splits)

sentence1 = "i like dogs"
sentence2 = "i like canines"
sentence3 = "the weather is ugly outside"

embedding1 = embedding.embed_query(sentence1)
embedding2 = embedding.embed_query(sentence2)
embedding3 = embedding.embed_query(sentence3)

settings.print("embedding1:",embedding1)
settings.print("embedding2:",embedding2)
settings.print("embedding3:",embedding3)

settings.print("Similarity with 1 an 2: ",np.dot(embedding1, embedding2))
settings.print("Similarity with 1 an 3: ", np.dot(embedding1, embedding3))
settings.print("Similarity with 2 an 3: ", np.dot(embedding2, embedding3))

persist_directory = Path('./chroma/')

if persist_directory.exists():
    shutil.rmtree(persist_directory)
persist_directory.mkdir()

# chroma db is not supported in python 3.14
vectordb = Chroma.from_documents(
    documents=splits,
    embedding=embedding,
    persist_directory=str(persist_directory)
)

settings.print("vectordb._collection.count():",vectordb._collection.count())

question = "is there an email i can ask for help"
docs = vectordb.similarity_search(question,k=3)
settings.print("question:",question,len(docs))
settings.print("docs[0].page_content",docs[0].page_content)

vectordb.persist()

question = "what did they say about matlab?"
docs = vectordb.similarity_search(question,k=5)
settings.print("Similarity Score: ",question,docs)
settings.print("docs[0]",docs[0])
settings.print("docs[1]",docs[1])

question = "what did they say about regression in the third lecture?"
docs = vectordb.similarity_search(question,k=5)
settings.print(question, docs)
for doc in docs:
    settings.print(doc.metadata)

settings.print(docs[4].page_content)

