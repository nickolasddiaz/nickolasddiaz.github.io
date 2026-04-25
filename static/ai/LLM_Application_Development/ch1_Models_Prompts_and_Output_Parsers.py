# https://learn.deeplearning.ai/courses/langchain/lesson/u9olq/introduction
import os
import sys

from langchain_classic.output_parsers import ResponseSchema, StructuredOutputParser
from langchain_core.prompts import ChatPromptTemplate

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()
chat = settings.client_ChatOpenAI


template_string = """Translate the text \
that is delimited by triple backticks \
into a style that is {style}. \
text: ```{text}```
"""

settings.print("template string: ", template_string)


prompt_template = ChatPromptTemplate.from_template(template_string)
settings.print("prompt: ",prompt_template.messages[0].prompt)
settings.print("input variables: ",prompt_template.messages[0].prompt.input_variables)

customer_style = """American English \
in a calm and respectful tone
"""
settings.print("customer style: ",customer_style)

customer_email = """
Arrr, I be fuming that me blender lid \
flew off and splattered me kitchen walls \
with smoothie! And to make matters worse, \
the warranty don't cover the cost of \
cleaning up me kitchen. I need yer help \
right now, matey!
"""
settings.print("customer email: ",customer_email)

customer_messages = prompt_template.format_messages(
                    style=customer_style,
                    text=customer_email)

settings.print("customer_messages type: ",type(customer_messages))
settings.print("customer_messages[0] type: ", type(customer_messages[0]))
settings.print("customer_messages[0]: ",customer_messages[0])

customer_response = chat.invoke(customer_messages)


settings.print("customer_response.content: ", customer_response.content)

service_reply = """Hey there customer, \
the warranty does not cover \
cleaning expenses for your kitchen \
because it's your fault that \
you misused your blender \
by forgetting to put the lid on before \
starting the blender. \
Tough luck! See ya!
"""

service_style_pirate = """\
a polite tone \
that speaks in English Pirate\
"""

service_messages = prompt_template.format_messages(
    style=service_style_pirate,
    text=service_reply)

settings.print("service_messages[0].content: ", service_messages[0].content)
service_response = chat.invoke(service_messages)
settings.print("service_response.content",service_response.content)


settings.print("Parse the LLM output string into a Python dictionary")

gift_schema = ResponseSchema(name="gift",
                             description="Was the item purchased\
                             as a gift for someone else? \
                             Answer True if yes,\
                             False if not or unknown.")

delivery_days_schema = ResponseSchema(name="delivery_days",
                                      description="How many days\
                                      did it take for the product\
                                      to arrive? If this \
                                      information is not found,\
                                      output -1.")

price_value_schema = ResponseSchema(name="price_value",
                                    description="Extract any\
                                    sentences about the value or \
                                    price, and output them as a \
                                    comma separated Python list.")

response_schemas = [gift_schema,
                    delivery_days_schema,
                    price_value_schema]

output_parser = StructuredOutputParser.from_response_schemas(response_schemas)

format_instructions = output_parser.get_format_instructions()

settings.print("format_instructions: ",format_instructions)

review_template_2 = """\
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? \
Answer True if yes, False if not or unknown.

delivery_days: How many days did it take for the product\
to arrive? If this information is not found, output -1.

price_value: Extract any sentences about the value or price,\
and output them as a comma separated Python list.

text: {text}

{format_instructions}
"""
settings.print("review_template_2: ", review_template_2)

prompt = ChatPromptTemplate.from_template(template=review_template_2)


customer_review = """\
This leaf blower is pretty amazing.  It has four settings:\
candle blower, gentle breeze, windy city, and tornado. \
It arrived in two days, just in time for my wife's \
anniversary present. \
I think my wife liked it so much she was speechless. \
So far I've been the only one using it, and I've been \
using it every other morning to clear the leaves on our lawn. \
It's slightly more expensive than the other leaf blowers \
out there, but I think it's worth it for the extra features.
"""

settings.print("customer_review: ", customer_review)

review_template = """\
For the following text, extract the following information:

gift: Was the item purchased as a gift for someone else? \
Answer True if yes, False if not or unknown.

delivery_days: How many days did it take for the product \
to arrive? If this information is not found, output -1.

price_value: Extract any sentences about the value or price,\
and output them as a comma separated Python list.

Format the output as JSON with the following keys:
gift
delivery_days
price_value

text: {text}
"""

settings.print("review_template: ", review_template)

messages = prompt.format_messages(text=customer_review,
                                format_instructions=format_instructions)

settings.print("messages[0].content: ", messages[0].content)
response = chat.invoke(messages)
settings.print("response.content: ", response.content)
output_dict = output_parser.parse(response.content)
settings.print("output_dict: ", output_dict)
settings.print("type(output_dict): ",type(output_dict))
settings.print("output_dict.get('delivery_days'): ",output_dict.get('delivery_days'))