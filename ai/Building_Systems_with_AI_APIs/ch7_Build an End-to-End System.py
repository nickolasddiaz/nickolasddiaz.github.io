import os
import sys

import openai
import utils

import panel as pn  # GUI
pn.extension()
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

def get_moderation(prompt, temperature=0):
    message = [{"role": "user", "content": prompt}]
    response = client.chat.completions.create(
        model="meta-llama/llama-guard-3-8b",
        messages=message,
        temperature=temperature,
    )

    settings.print("Prompt: ",prompt)
    settings.print("Response: ",response.choices[0].message.content.strip())
    return response.choices[0].message.content.strip()


def process_user_message(user_input, all_messages, debug=True):
    delimiter = "```"

    # Step 1: Check input to see if it flags the Moderation API or is a prompt injection
    moderation_output = get_moderation(user_input)

    if "unsafe" in moderation_output:
        if debug: print("Step 1: Response flagged by Moderation API.")
        return "Sorry, we cannot provide this information."


    category_and_product_response = utils.find_category_and_product_only(user_input, utils.get_products_and_category())
    # print(print(category_and_product_response)
    # Step 2: Extract the list of products
    category_and_product_list = utils.read_string_to_list(category_and_product_response)
    # print(category_and_product_list)

    if debug: print("Step 2: Extracted list of products.")

    # Step 3: If products are found, look them up
    product_information = utils.generate_output_string(category_and_product_list)
    if debug: print("Step 3: Looked up product information.")

    # Step 4: Answer the user question
    system_message = f"""
    You are a customer service assistant for a large electronic store. \
    Respond in a friendly and helpful tone, with concise answers. \
    Make sure to ask the user relevant follow-up questions.
    """
    messages = [
        {'role': 'system', 'content': system_message},
        {'role': 'user', 'content': f"{delimiter}{user_input}{delimiter}"},
        {'role': 'assistant', 'content': f"Relevant product information:\n{product_information}"}
    ]

    final_response = get_completion(all_messages + messages)
    if debug: print("Step 4: Generated response to user question.")
    all_messages = all_messages + messages[1:]

    # Step 5: Put the answer through the Moderation API
    moderation_output = get_moderation(final_response)

    if "unsafe" in moderation_output:
        if debug: print("Step 5: Response flagged by Moderation API.")
        return "Sorry, we cannot provide this information."

    if debug: print("Step 5: Response passed moderation check.")

    # Step 6: Ask the model if the response answers the initial user query well
    user_message = f"""
    Customer message: {delimiter}{user_input}{delimiter}
    Agent response: {delimiter}{final_response}{delimiter}

    Does the response sufficiently answer the question?
    """
    messages = [
        {'role': 'system', 'content': system_message},
        {'role': 'user', 'content': user_message}
    ]
    evaluation_response = get_completion(messages)
    if debug: print("Step 6: Model evaluated the response.")

    # Step 7: If yes, use this answer; if not, say that you will connect the user to a human
    if "Y" in evaluation_response:  # Using "in" instead of "==" to be safer for model output variation (e.g., "Y." or "Yes")
        if debug: print("Step 7: Model approved the response.")
        return final_response, all_messages
    else:
        if debug: print("Step 7: Model disapproved the response.")
        neg_str = "I'm unable to provide the information you're looking for. I'll connect you with a human representative for further assistance."
        return neg_str, all_messages


user_input = "tell me about the smartx pro phone and the fotosnap camera, the dslr one. Also what tell me about your tvs"
response, _ = process_user_message(user_input, [])
print(response)


def collect_messages(debug=False):
    user_input = inp.value_input
    if debug: print(f"User Input = {user_input}")
    if user_input == "":
        return
    inp.value = ''
    global context
    # response, context = process_user_message(user_input, context, utils.get_products_and_category(),debug=True)
    response, context = process_user_message(user_input, context, debug=False)
    context.append({'role': 'assistant', 'content': f"{response}"})
    panels.append(
        pn.Row('User:', pn.pane.Markdown(user_input, width=600)))
    panels.append(
        pn.Row('Assistant:', pn.pane.Markdown(response, width=600, style={'background-color': '#F6F6F6'})))

    return pn.Column(*panels)


panels = [] # collect display

context = [ {'role':'system', 'content':"You are Service Assistant"} ]

inp = pn.widgets.TextInput( placeholder='Enter text here…')
button_conversation = pn.widgets.Button(name="Service Assistant")

interactive_conversation = pn.bind(collect_messages, button_conversation)

dashboard = pn.Column(
    inp,
    pn.Row(button_conversation),
    pn.panel(interactive_conversation, loading_indicator=True, height=300),
)

dashboard