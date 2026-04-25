import os
import sys
import gradio as gr

from langchain_community.chat_message_histories import FileChatMessageHistory
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables import RunnableWithMessageHistory, RunnableConfig

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()
llm = settings.client_ChatOpenAI
embedding = settings.client_client_OpenAIEmbeddings


prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant. Be concise."),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{input}")
])

# Create the core chain
chain = prompt | llm

store = {}

def get_session_history(session_id: str) -> FileChatMessageHistory:
    # This creates/loads a JSON file named after the session_id
    return FileChatMessageHistory(f"./chat_history/{session_id}")


with_history = RunnableWithMessageHistory(
    chain,
    get_session_history,
    input_messages_key="input",
    history_messages_key="history",
)

directory_path = 'chat_history'
os.makedirs(directory_path, exist_ok=True)
entries = os.listdir(directory_path)
current_session: str = entries[0]

def invoke_with_history(msg: str) -> str:
    response = with_history.invoke(
        {"input": msg},
        config = RunnableConfig(configurable={"session_id": current_session})
    )
    return response.content


def get_history_gradio():
    history = []
    for message in get_session_history(current_session).messages:
        if message.__class__.__name__ == "HumanMessage":
            history.append({"role": "user", "content": message.content})
        else:
            history.append({"role": "assistant", "content": message.content})

    return history


def response(chat_message, history):
    return invoke_with_history(chat_message)

custom_chatbot = gr.Chatbot(value=get_history_gradio())

def select_value(value: str):
    global current_session
    current_session = value
    return get_history_gradio()


def add_chat(chat_name: str):
    global current_session
    current_session = chat_name + ".json"
    entries.append(current_session)

    return get_history_gradio(), gr.Dropdown(choices=entries, value=current_session)

with gr.Blocks() as demo:
    name_input = gr.Textbox(label="Add a new chatbox history")
    add_button = gr.Button("New Chatbot")

    dropdown = gr.Dropdown(choices=entries, label="Select an option")
    dropdown.change(fn=select_value, inputs=dropdown, outputs=custom_chatbot)

    chat = gr.ChatInterface(fn=response, chatbot=custom_chatbot)

    add_button.click(fn=add_chat, inputs=name_input, outputs=[custom_chatbot, dropdown])

demo.launch()
