import os
import sys

from langchain_classic.chains.llm import LLMChain
from langchain_classic.chains.router import MultiPromptChain
from langchain_classic.chains.router.llm_router import RouterOutputParser, LLMRouterChain
from langchain_classic.chains.sequential import SimpleSequentialChain, SequentialChain
from langchain_core.prompts import ChatPromptTemplate, PromptTemplate

from Settings import Settings
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
settings = Settings()
llm = settings.client_ChatOpenAI
llm.temperature = 0.9

settings.print("LLMChain:")

prompt = ChatPromptTemplate.from_template(
    "What is the best name to describe \
    a company that makes {product}?"
)

chain = LLMChain(llm=llm, prompt=prompt)

product = "Queen Size Sheet Set"
settings.print("product: ",product)
settings.print("prompt: ",prompt.messages)
settings.print(chain.run(product))


print("SimpleSequentialChain:")

# prompt template 1
first_prompt = ChatPromptTemplate.from_template(
    "What is the best name to describe \
    a company that makes {product}?"
)

# Chain 1
chain_one = LLMChain(llm=llm, prompt=first_prompt)

# prompt template 2
second_prompt = ChatPromptTemplate.from_template(
    "Write a 20 words description for the following \
    company:{company_name}"
)
# chain 2
chain_two = LLMChain(llm=llm, prompt=second_prompt)

overall_simple_chain = SimpleSequentialChain(chains=[chain_one, chain_two], verbose=True)

settings.print("Prompts:", first_prompt.messages, second_prompt.messages)
settings.print(overall_simple_chain.run(product))



settings.print("SequentialChain:")

# prompt template 1: translate to english
first_prompt = ChatPromptTemplate.from_template(
    "Translate the following review to english:"
    "\n\n{Review}"
)
# chain 1: input= Review and output= English_Review
chain_one = LLMChain(llm=llm, prompt=first_prompt, output_key="English_Review")

second_prompt = ChatPromptTemplate.from_template(
    "Can you summarize the following review in 1 sentence:"
    "\n\n{English_Review}"
)

# chain 2: input= English_Review and output= summary
chain_two = LLMChain(llm=llm, prompt=second_prompt,output_key="summary")

# prompt template 3: translate to english
third_prompt = ChatPromptTemplate.from_template("What language is the following review:\n\n{Review}")

# chain 3: input= Review and output= language
chain_three = LLMChain(llm=llm, prompt=third_prompt,output_key="language")

# prompt template 4: follow-up message
fourth_prompt = ChatPromptTemplate.from_template(
    "Write a follow up response to the following "
    "summary in the specified language:"
    "\n\nSummary: {summary}\n\nLanguage: {language}"
)
# chain 4: input= summary, language and output= followup_message
chain_four = LLMChain(llm=llm, prompt=fourth_prompt,output_key="followup_message")


settings.print("Prompts:", first_prompt.messages, second_prompt.messages, third_prompt.messages, fourth_prompt.messages)
# overall_chain: input= Review
# and output= English_Review,summary, followup_message
overall_chain = SequentialChain(
    chains=[chain_one, chain_two, chain_three, chain_four],
    input_variables=["Review"],
    output_variables=["English_Review", "summary","followup_message"],
    verbose=True
)

class DF:
    def __init__(self):
        self.review = ["I ordered a king size set. My only criticism would be that I wish seller would offer the king size set with 4 pillowcases. I separately ordered a two pack of pillowcases so I could have a total of four. When I saw the two packages, it looked like the color did not exactly match. Customer service was excellent about sending me two more pillowcases so I would have four that matched. Excellent! For the cost of these sheets, I am satisfied with the characteristics and coolness of the sheets.",
                       "I loved the waterproof sac, although the opening was made of a hard plastic. I don’t know if that would break easily. But I couldn’t turn my phone on, once it was in the pouch.",
                       "This mattress had a small hole in the top of it (took forever to find where it was), and the patches that they provide did not work, maybe because it's the top of the mattress where it's kind of like fabric and a patch won't stick. Maybe I got unlucky with a defective mattress, but where's quality assurance for this company? That flat out should not happen. Emphasis on flat. Cause that's what the mattress was. Seriously horrible experience, ruined my friend's stay with me. Then they make you ship it back instead of just providing a refund, which is also super annoying to pack up an air mattress and take it to the UPS store. This company is the worst, and this mattress is the worst.",
                       "This is the best throw pillow fillers on Amazon. I’ve tried several others, and they’re all cheap and flat no matter how much fluffing you do. Once you toss these in the dryer after you remove them from the vacuum sealed shipping material, they fluff up great",
                       "I loved this product. But they only seem to last a few months. The company was great replacing the first one (the frother falls out of the handle and can't be fixed). The after 4 months my second one did the same. I only use the frother for coffee once a day. It's not overuse or abuse. I'm very disappointed and will look for another. As I understand they will only replace once. Anyway, if you have one good luck.0,"
                       "Je trouve le goût médiocre. La mousse ne tient pas, c'est bizarre. J'achète les mêmes dans le commerce et le goût est bien meilleur...\nVieux lot ou contrefaçon !?",
                       "Está la bonita calienta muy rápido, es muy funcional, solo falta ver cuánto dura, solo llevo 3 días en funcionamiento.",
                       ]
        self.product = ["Queen Size Sheet Set",
                        "Waterproof Phone Pouch",
                        "Luxury Air Mattress",
                        "Pillows Insert",
                        "Milk Frother Handheld",
                        "L'Or Espresso Café",
                        "Hervidor de Agua Eléctrico"
                        ]

df = DF()
review = df.review[5]
settings.print("review: ", review)
settings.print("overall_chain: ",overall_chain(review))


settings.print("Router Chain")

physics_template = """You are a very smart physics professor. \
You are great at answering questions about physics in a concise\
and easy to understand manner. \
When you don't know the answer to a question you admit\
that you don't know.

Here is a question:
{input}"""


math_template = """You are a very good mathematician. \
You are great at answering math questions. \
You are so good because you are able to break down \
hard problems into their component parts, 
answer the component parts, and then put them together\
to answer the broader question.

Here is a question:
{input}"""

history_template = """You are a very good historian. \
You have an excellent knowledge of and understanding of people,\
events and contexts from a range of historical periods. \
You have the ability to think, reflect, debate, discuss and \
evaluate the past. You have a respect for historical evidence\
and the ability to make use of it to support your explanations \
and judgements.

Here is a question:
{input}"""


computer_science_template = """ You are a successful computer scientist.\
You have a passion for creativity, collaboration,\
forward-thinking, confidence, strong problem-solving capabilities,\
understanding of theories and algorithms, and excellent communication \
skills. You are great at answering coding questions. \
You are so good because you know how to solve a problem by \
describing the solution in imperative steps \
that a machine can easily interpret and you know how to \
choose a solution that has a good balance between \
time complexity and space complexity. 

Here is a question:
{input}"""

settings.print("physics_template", physics_template)
settings.print("math_template", math_template)
settings.print("history_template", history_template)
settings.print("computer_science_template", computer_science_template)

prompt_infos = [
    {
        "name": "physics",
        "description": "Good for answering questions about physics",
        "prompt_template": physics_template
    },
    {
        "name": "math",
        "description": "Good for answering math questions",
        "prompt_template": math_template
    },
    {
        "name": "History",
        "description": "Good for answering history questions",
        "prompt_template": history_template
    },
    {
        "name": "computer science",
        "description": "Good for answering computer science questions",
        "prompt_template": computer_science_template
    }
]

for p in prompt_infos:
    settings.print("prompt_infos: ", p)

llm.temperature = 0

destination_chains = {}
for p_info in prompt_infos:
    name = p_info["name"]
    prompt_template = p_info["prompt_template"]
    prompt = ChatPromptTemplate.from_template(template=prompt_template)
    chain = LLMChain(llm=llm, prompt=prompt)
    destination_chains[name] = chain

destinations = [f"{p['name']}: {p['description']}" for p in prompt_infos]
destinations_str = "\n".join(destinations)

default_prompt = ChatPromptTemplate.from_template("{input}")
default_chain = LLMChain(llm=llm, prompt=default_prompt)

MULTI_PROMPT_ROUTER_TEMPLATE = """Given a raw text input to a \
language model select the model prompt best suited for the input. \
You will be given the names of the available prompts and a \
description of what the prompt is best suited for. \
You may also revise the original input if you think that revising\
it will ultimately lead to a better response from the language model.

<< FORMATTING >>
Return a markdown code snippet with a JSON object formatted to look like:
```json
{{{{
    "destination": string  "DEFAULT" or name of the prompt to use in {destinations}
    "next_inputs": string  a potentially modified version of the original input
}}}}
```

REMEMBER: The value of “destination” MUST match one of \
the candidate prompts listed below.\
If “destination” does not fit any of the specified prompts, set it to “DEFAULT.”
REMEMBER: "next_inputs" can just be the original input \
if you don't think any modifications are needed.

<< CANDIDATE PROMPTS >>
{destinations}

<< INPUT >>
{{input}}

<< OUTPUT (remember to include the ```json)>>"""

settings.print("MULTI_PROMPT_ROUTER_TEMPLATE: ", MULTI_PROMPT_ROUTER_TEMPLATE)

router_template = MULTI_PROMPT_ROUTER_TEMPLATE.format(
    destinations=destinations_str
)
router_prompt = PromptTemplate(
    template=router_template,
    input_variables=["input"],
    output_parser=RouterOutputParser(),
)

router_chain = LLMRouterChain.from_llm(llm, router_prompt)

chain = MultiPromptChain(router_chain=router_chain,
                         destination_chains=destination_chains,
                         default_chain=default_chain, verbose=True
                        )
settings.print(chain.run("What is black body radiation?"))
settings.print(chain.run("what is the most beautify equation in mathematics"))
settings.print(chain.run("Why does every cell in our body contain DNA?"))