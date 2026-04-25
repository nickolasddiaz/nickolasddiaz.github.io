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


delimiter = "####"
system_message = f"""
You will be provided with customer service queries. \
The customer service query will be delimited with \
{delimiter} characters.
Classify each query into a primary category \
and a secondary category. 
Provide your output in json format with the \
keys: primary and secondary.

Primary categories: Billing, Technical Support, \
Account Management, or General Inquiry.

Billing secondary categories:
Unsubscribe or upgrade
Add a payment method
Explanation for charge
Dispute a charge

Technical Support secondary categories:
General troubleshooting
Device compatibility
Software updates

Account Management secondary categories:
Password reset
Update personal information
Close account
Account security

General Inquiry secondary categories:
Product information
Pricing
Feedback
Speak to a human

"""
user_message = f"""\
I want you to delete my profile and all of my user data"""
messages =  [
{'role':'system',
 'content': system_message},
{'role':'user',
 'content': f"{delimiter}{user_message}{delimiter}"},
]
get_completion(messages)

user_message = f"""\
Tell me more about your flat screen tvs"""
messages =  [
{'role':'system',
 'content': system_message},
{'role':'user',
 'content': f"{delimiter}{user_message}{delimiter}"},
]
response = get_completion(messages)
print(response)

