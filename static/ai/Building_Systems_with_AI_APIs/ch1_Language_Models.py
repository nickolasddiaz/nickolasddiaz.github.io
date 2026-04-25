# https://learn.deeplearning.ai/courses/chatgpt-building-system/lesson/r172r/language-models%2C-the-chat-format-and-tokens
import os
import sys

import openai

from Settings import Settings, MODELS, api_key, Open_Router_URL

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

settings = Settings()

client = openai.OpenAI(base_url=Open_Router_URL, api_key=api_key)
model=MODELS.GPT_4o_mini.value

def get_completion(prompt, temperature=0):
    response = client.chat.completions.create(
        model=model,
        messages=prompt,
        temperature=temperature,
    )

    settings.print("Prompt: ",prompt)
    settings.print("Response: ",response.choices[0].message.content)
    return response.choices[0].message.content


if __name__ == "__main__":
    get_completion([{"role": "user", "content": "What is the capital of France?"}])
    get_completion([{"role": "user", "content": "Take the letters in lollipop and reverse them"}])
    get_completion([{"role": "user", "content": "Take the letters in l-o-l-l-i-p-o-p and reverse them"}])


    messages = [
        {'role':'system', 'content': "You are an assistant who responds in the style of Dr Seuss."},
        {'role':'user', 'content':"write me a very short poem about a happy carrot"},
    ]
    get_completion(messages, temperature = 1)

    messages =  [
        {'role':'system', 'content':'All your responses must be one sentence long.'},
        {'role':'user', 'content':'write me a story about a happy carrot'},
    ]
    get_completion(messages, temperature = 1)

    # combined
    messages =  [
        {'role':'system',
         'content':"""You are an assistant who responds in the style of Dr Seuss. All your responses must be one sentence long."""},
        {'role':'user','content':"""write me a story about a happy carrot"""},
    ]
    get_completion(messages, temperature = 1)

    messages = [
        {'role':'system','content':"""You are an assistant who responds in the style of Dr Seuss."""},
        {'role':'user', 'content':"""write me a very short poem about a happy carrot"""},
    ]
    get_completion(messages)