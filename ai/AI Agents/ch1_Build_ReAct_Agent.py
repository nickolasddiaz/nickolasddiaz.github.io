# link https://learn.deeplearning.ai/courses/ai-agents-in-langgraph/lesson/qyrpc/introduction
import os
import re
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings, MODELS

settings = Settings()

chat_completion = settings.client_OpenAI.chat.completions.create(
    model=MODELS.GPT_4o_mini.value,
    messages=[{"role": "user", "content": "Hello world"}]
)

settings.print(chat_completion.choices[0].message.content)


class Agent:
    def __init__(self, system: str= ""):
        self.system = system
        self.messages: list[dict[str,str]] = []
        if self.system:
            self.messages.append({"role": "system", "content": system})

    def __call__(self, message: str) -> bytes:
        self.messages.append({"role": "user", "content": message})
        result_call: bytes = self.execute()
        self.messages.append({"role": "assistant", "content": result_call})
        return result_call

    def execute(self) -> bytes:
        completion = settings.client_OpenAI.chat.completions.create(
            model=MODELS.GPT_4o_mini.value,
            temperature=0,
            messages=self.messages)
        return completion.choices[0].message.content


prompt: str = """
        You run in a loop of Thought, Action, PAUSE, Observation.
        At the end of the loop you output an Answer
        Use Thought to describe your thoughts about the question you have been asked.
        Use Action to run one of the actions available to you - then return PAUSE.
        Observation will be the result of running those actions.
        
        Your available actions are:
        
        calculate:
        e.g. calculate: 4 * 7 / 3
        Runs a calculation and returns the number - uses Python so be sure to use floating point syntax if necessary
        
        average_dog_weight:
        e.g. average_dog_weight: Collie
        returns average weight of a dog when given the breed
        
        Example session:
        
        Question: How much does a Bulldog weigh?
        Thought: I should look the dogs weight using average_dog_weight
        Action: average_dog_weight: Bulldog
        PAUSE
        
        You will be called again with this:
        
        Observation: A Bulldog weights 51 lbs
        
        You then output:
        
        Answer: A bulldog weights 51 lbs
""".strip()


def calculate(what):
    return eval(what)


def average_dog_weight(name: str):
    if name in "Scottish Terrier":
        return "Scottish Terriers average 20 lbs"
    elif name in "Border Collie":
        return "a Border Collies average weight is 37 lbs"
    elif name in "Toy Poodle":
        return "a toy poodles average weight is 7 lbs"
    else:
        return "An average dog weights 50 lbs"


known_actions = {
    "calculate": calculate,
    "average_dog_weight": average_dog_weight
}
settings.print(known_actions)

abot = Agent(prompt)

result = abot("How much does a toy poodle weigh?")
settings.print(result)

result = average_dog_weight("Toy Poodle")

settings.print(result)

next_prompt = "Observation: {}".format(result)

abot(next_prompt)

settings.print(abot.messages)

question = """I have 2 dogs, a border collie and a scottish terrier. \
What is their combined weight"""
abot(question)

next_prompt = "Observation: {}".format(average_dog_weight("Border Collie"))
settings.print(next_prompt)

abot(next_prompt)

next_prompt = "Observation: {}".format(average_dog_weight("Scottish Terrier"))
settings.print(next_prompt)

abot(next_prompt)

next_prompt = "Observation: {}".format(eval("37 + 20"))
settings.print(next_prompt)

abot(next_prompt)

action_re = re.compile('^Action: (\\w+): (.*)$')  # python regular expression to selection action


def query(query_question: str, max_turns: int =5):
    i = 0
    bot = Agent(prompt)
    query_next_prompt = query_question
    while i < max_turns:
        i += 1
        query_result = bot(query_next_prompt)
        settings.print(query_result)
        actions = [
            action_re.match(a)
            for a in query_result.split('\n')
            if action_re.match(a)
        ]
        if actions:
            # There is an action to run
            action, action_input = actions[0].groups()
            if action not in known_actions:
                raise Exception("Unknown action: {}: {}".format(action, action_input))
            settings.print(" -- running {} {}".format(action, action_input))
            observation = known_actions[action](action_input)
            settings.print("Observation: ", observation)
            query_next_prompt = "Observation: {}".format(observation)
        else:
            return


question:str = """I have 2 dogs, a border collie and a scottish terrier. \
What is their combined weight"""
settings.print(question)
query(question)
