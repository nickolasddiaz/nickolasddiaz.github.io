# https://learn.deeplearning.ai/courses/langchain-chat-with-your-data/lesson/snupv/introduction
import os
import sys
from langchain_community.document_loaders import PyPDFLoader, WebBaseLoader


from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()


loader = PyPDFLoader("./machinelearning-lecture01.pdf")
pages = loader.load()
settings.print("Loading a PDF:")
settings.print("Length of the page:",len(pages))
page = pages[0]
settings.print("page content up to 500",page.page_content[0:500])
settings.print("page meta data",page.metadata)


settings.print("Loading a webpage:")

loader = WebBaseLoader("https://github.com/basecamp/handbook/blob/master/titles-for-programmers.md")
docs = loader.load()
settings.print("Loading a github site:",docs[0].page_content[:500])