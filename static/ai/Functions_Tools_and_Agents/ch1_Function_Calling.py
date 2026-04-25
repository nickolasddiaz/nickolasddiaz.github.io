# lesson from https://learn.deeplearning.ai/courses/functions-tools-agents-langchain

import json
import os
import sys

from Settings import Settings, MODELS
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()

# Example dummy function hard coded to return the same weather
# In production, this could be your backend API or an external API
def get_current_weather(location, unit="Fahrenheit"):
    """Get the current weather in a given location"""
    weather_info = {
        "location": location,
        "temperature": "72",
        "unit": unit,
        "forecast": ["sunny", "windy"],
    }
    return json.dumps(weather_info)


# define a function
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA",
                    },
                    "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]},
                },
                "required": ["location"],
            },
        },
    }
]
settings.print(tools)
messages = [{"role": "user", "content": "What's the weather like in Boston?"}]
settings.print(messages)
response = settings.client_OpenAI.chat.completions.create(
    model=MODELS.GPT_4o_mini.value,
    messages=messages,
    tools=tools,
    tool_choice="auto",
)

response_message = response.choices[0].message
tool_calls = response_message.tool_calls

if tool_calls:
    for tool_call in tool_calls:
        args = json.loads(tool_call.function.arguments)
        result = get_current_weather(**args)
        settings.print(result)
else:
    settings.print(response_message.content)