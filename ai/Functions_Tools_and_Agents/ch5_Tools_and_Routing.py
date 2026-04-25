import os
import sys

from langchain_core.prompts import ChatPromptTemplate
from GUI_Conversational_agent import get_current_temperature, search_wikipedia
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
# --- Setup ---
from Settings import Settings

settings = Settings()

model = settings.client_ChatOpenAI


# --- Bind Tools to Model ---
tools = [get_current_temperature, search_wikipedia]
model_with_tools = model.bind_tools(tools)

# --- Define the Logic ---

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful but sassy assistant. Use tools if needed."),
    ("user", "{input}"),
])


def tool_router(result):
    """
    Manually route the tool call.
    In a production app, you'd likely use an AgentExecutor,
    but for a simple chain, we check for tool_calls.
    """
    if not result.tool_calls:
        return result.content

    # Process the first tool call found
    tool_call = result.tool_calls[0]
    selected_tool = {"get_current_temperature": get_current_temperature,
                     "search_wikipedia": search_wikipedia}[tool_call["name"]]

    # Execute the tool
    return selected_tool.invoke(tool_call["args"])


# Modern Chain: Prompt -> Model -> Router
chain = prompt | model_with_tools | tool_router

# --- Execution ---
settings.print("--- Testing Weather ---")
settings.print(chain.invoke({"input": "What is the weather in San Francisco (lat: 37.7, long: -122.4)?"}))

settings.print("\n--- Testing Wikipedia ---")
settings.print(chain.invoke({"input": "What is LangChain?"}))

settings.print("\n--- Testing Conversational ---")
settings.print(chain.invoke({"input": "Hi there!"}))