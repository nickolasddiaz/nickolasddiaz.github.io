import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings
import requests
from bs4 import BeautifulSoup
from ddgs import DDGS
import re
import json
from pygments import highlight, lexers, formatters


settings = Settings()

# run search
prompt = "What is in Nvidia's new Blackwell GPU?"
settings.print(prompt)
result = settings.client_Tavily.search(prompt ,include_answer=True)

# print the answer
settings.print(result["answer"])


city = "Jacksonville"

query = f"""
    what is the current weather in {city}?
    Should I travel there today?
    "weather.com"
"""
settings.print(query)

ddg = DDGS()

def search(search_query, max_results=6):
    temp_results =[
            "https://weather.com/weather/today/l/USCA0987:1:US",
            "https://weather.com/weather/hourbyhour/l/54f9d8baac32496f6b5497b4bf7a277c3e2e6cc5625de69680e6169e7e38e9a8",
        ]
    try:
        results = ddg.text(search_query, max_results=max_results, backend="lite")
        if not results:
            results = temp_results
        return [j["href"] for j in results]
    except Exception as e:
        settings.print(f"returning previous results due to exception reaching ddg.")
        return temp_results


for i in search(query):
    settings.print(i)


def scrape_weather_info(url):
    """Scrape content from the given URL"""
    if not url:
        return "Weather information could not be found."

    # fetch data
    headers = {'User-Agent': 'Mozilla/5.0'}
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return "Failed to retrieve the webpage."

    # parse result
    scape_soup = BeautifulSoup(response.text, 'html.parser')
    return scape_soup

# use DuckDuckGo to find websites and take the first result
url = search(query)[0]

# scrape first website
soup = scrape_weather_info(url)

settings.print(f"Website: {url}\n\n")
settings.print(str(soup.body)[:50000]) # limit long outputs

# extract text
weather_data = []
for tag in soup.find_all(['h1', 'h2', 'h3', 'p']):
    text = tag.get_text(" ", strip=True)
    weather_data.append(text)

# combine all elements into a single string
weather_data = "\n".join(weather_data)

# remove all spaces from the combined text
weather_data = re.sub(r'\s+', ' ', weather_data)

settings.print(f"Website: {url}\n\n")
settings.print(weather_data)

# run search
result = settings.client_Tavily.search(query, max_results=1)

# print first result
data = result["results"][0]["content"]

settings.print(data)

# parse JSON
parsed_json = json.loads(data.replace("'", '"'))

# pretty print JSON with syntax highlighting
formatted_json = json.dumps(parsed_json, indent=4)
colorful_json = highlight(formatted_json,
                          lexers.JsonLexer(),
                          formatters.TerminalFormatter())

settings.print(colorful_json)
