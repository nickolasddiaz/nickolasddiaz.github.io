import os
import sys
from pathlib import Path

from langchain_classic.chains.retrieval_qa.base import RetrievalQA
from langchain_classic.indexes import VectorstoreIndexCreator
from langchain_community.document_loaders import CSVLoader
from langchain_community.vectorstores import DocArrayInMemorySearch

file = Path('./OutdoorClothingCatalog_1000.csv').resolve()

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings
settings = Settings()
llm = settings.client_ChatOpenAI

loader = CSVLoader(file_path=file)

embedding = settings.client_client_OpenAIEmbeddings

index = VectorstoreIndexCreator(vectorstore_cls=DocArrayInMemorySearch, embedding=embedding).from_loaders([loader])

query ="Please list all your shirts with sun protection in a table in markdown and summarize each one."
settings.print("query: ",query)

response = index.query(query, llm=llm)

settings.print("response: ",response)

loader = CSVLoader(file_path=file)

docs = loader.load()

settings.print("docs[0]: ",docs[0])


embed = embedding.embed_query("Hi my name is Harrison")
settings.print("len(embed):", len(embed))
settings.print("embed[:5]", embed[:5])
db = DocArrayInMemorySearch.from_documents(docs, embedding)

query = "Please suggest a shirt with sunblocking"
settings.print("query: ",query)
docs = db.similarity_search(query)
settings.print("len(docs): ", len(docs))
settings.print("docs[0]: ", docs[0])

retriever = db.as_retriever()
q_docs = "".join([docs[i].page_content for i in range(len(docs))])

qa_stuff = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever, verbose=True)

query =  "Please list all your shirts with sun protection in a table in markdown and summarize each one."

response = qa_stuff.run(query)
settings.print("response: ", response)

response = index.query(query, llm=llm)
settings.print("response: ", response)

index = VectorstoreIndexCreator(vectorstore_cls=DocArrayInMemorySearch, embedding=embedding).from_loaders([loader])
settings.print("index:", index)
