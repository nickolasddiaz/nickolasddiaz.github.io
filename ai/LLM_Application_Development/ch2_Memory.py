
from langchain_classic.chains.conversation.base import ConversationChain
from langchain_classic.memory import ConversationBufferMemory, ConversationBufferWindowMemory, \
    ConversationTokenBufferMemory, ConversationSummaryBufferMemory

import os
import sys
from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()
llm = settings.client_ChatOpenAI

settings.print("ConversationBufferMemory")

memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=llm,
    memory = memory,
    verbose=True
)

settings.print(conversation.predict(input="Hi, my name is Andrew"))
settings.print(conversation.predict(input="What is 1+1?"))
settings.print(conversation.predict(input="What is my name?"))
settings.print("memory.buffer", memory.buffer)

memory.load_memory_variables({})
memory = ConversationBufferMemory()

memory.save_context({"input": "Hi"},
                    {"output": "What's up"})

settings.print("memory.buffer", memory.buffer)

memory.load_memory_variables({})
memory.save_context({"input": "Not much, just hanging"},
                    {"output": "Cool"})

settings.print("Memory variables", memory.load_memory_variables({}))

settings.print("ConversationBufferWindowMemory")
memory = ConversationBufferWindowMemory(k=1)

memory.save_context({"input": "Hi"},
                    {"output": "What's up"})
memory.save_context({"input": "Not much, just hanging"},
                    {"output": "Cool"})


settings.print("Memory variables", memory.load_memory_variables({}))

memory = ConversationBufferWindowMemory(k=1)
conversation = ConversationChain(
    llm=llm,
    memory = memory,
    verbose=False
)

settings.print(conversation.predict(input="Hi, my name is Andrew"))

settings.print(conversation.predict(input="What is 1+1?"))
settings.print(conversation.predict(input="What is my name?"))

settings.print("ConversationBufferWindowMemory")

memory = ConversationTokenBufferMemory(llm=llm, max_token_limit=50)
memory.save_context({"input": "AI is what?!"},
                    {"output": "Amazing!"})
memory.save_context({"input": "Backpropagation is what?"},
                    {"output": "Beautiful!"})
memory.save_context({"input": "Chatbots are what?"},
                    {"output": "Charming!"})


settings.print("Memory variables", memory.load_memory_variables({}))

settings.print("ConversationSummaryMemory")

# create a long string
schedule = "There is a meeting at 8am with your product team. \
You will need your powerpoint presentation prepared. \
9am-12pm have time to work on your LangChain \
project which will go quickly because Langchain is such a powerful tool. \
At Noon, lunch at the italian restaurant with a customer who is driving \
from over an hour away to meet you to understand the latest in AI. \
Be sure to bring your laptop to show the latest LLM demo."

memory = ConversationSummaryBufferMemory(llm=llm, max_token_limit=100)
memory.save_context({"input": "Hello"}, {"output": "What's up"})
memory.save_context({"input": "Not much, just hanging"},
                    {"output": "Cool"})
memory.save_context({"input": "What is on the schedule today?"},
                    {"output": f"{schedule}"})

settings.print("Memory variables", memory.load_memory_variables({}))

conversation = ConversationChain(
    llm=llm,
    memory = memory,
    verbose=True
)

settings.print(conversation.predict(input="What would be a good demo to show?"))

settings.print("Memory variables", memory.load_memory_variables({}))

