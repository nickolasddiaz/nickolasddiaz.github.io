import csv
import os
import sys
from typing import List, Dict

from langchain_classic.chains.retrieval_qa.base import RetrievalQA
from langchain_community.document_loaders import CSVLoader
from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_core.documents import Document
from langchain_core.prompts import PromptTemplate

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from Settings import Settings

settings = Settings()

# Initialize LLM and embeddings
llm = settings.client_ChatOpenAI
embeddings = settings.client_client_OpenAIEmbeddings

# Load CSV data
file = 'OutdoorClothingCatalog_1000.csv'
loader = CSVLoader(file_path=file)
documents = loader.load()

# Create vector store directly (VectorstoreIndexCreator is deprecated)
vectorstore = DocArrayInMemorySearch.from_documents(
    documents=documents,
    embedding=embeddings
)

# Create retriever
retriever = vectorstore.as_retriever(
    search_kwargs={"k": 4}  # Return top 4 most relevant documents
)

# Create RetrievalQA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=retriever,
    return_source_documents=True,
    verbose=True
)

# Example queries
examples = [
    {
        "query": "Do the Cozy Comfort Pullover Set have side pockets?",
        "answer": "Yes"
    },
    {
        "query": "What collection is the Ultra-Lofty 850 Stretch Down Hooded Jacket from?",
        "answer": "The DownTek collection"
    }
]


# Generate additional examples using the LLM
def generate_qa_examples(docs: List[Document], num_examples: int = 5) -> List[Dict[str, str]]:
    """Generate Q&A examples from documents using LLM"""
    qa_generation_prompt = PromptTemplate(
        input_variables=["doc"],
        template="""Based on the following document, generate a question and answer pair.

Document:
{doc}

Generate a specific question that can be answered from this document, and provide the answer.
Format your response as:
Question: [your question]
Answer: [your answer]
"""
    )

    generated_examples = []
    for doc in docs[:num_examples]:
        prompt = qa_generation_prompt.format(doc=doc.page_content)
        response = llm.invoke(prompt)

        # Parse the response
        lines = response.content.split('\n')
        question = ""
        answer = ""

        for line in lines:
            if line.startswith("Question:"):
                question = line.replace("Question:", "").strip()
            elif line.startswith("Answer:"):
                answer = line.replace("Answer:", "").strip()

        if question and answer:
            generated_examples.append({
                "query": question,
                "answer": answer
            })

    return generated_examples


# Generate new examples from first 5 documents
settings.print("Generating additional Q&A examples...")
new_examples = generate_qa_examples(documents, num_examples=5)
examples.extend(new_examples)

settings.print(f"\nTotal examples: {len(examples)}\n")

# Run predictions on all examples
settings.print("Running predictions...")
predictions = []
for example in examples:
    result = qa_chain.invoke({"query": example["query"]})
    predictions.append({
        "query": example["query"],
        "answer": example["answer"],
        "result": result["result"],
        "source_documents": result.get("source_documents", [])
    })


# Evaluate predictions using LLM-as-judge approach
def evaluate_qa_pairs(examples: List[Dict], predictions: List[Dict]) -> List[Dict]:
    """Evaluate Q&A predictions using LLM"""
    eval_prompt = PromptTemplate(
        input_variables=["query", "expected_answer", "predicted_answer"],
        template="""You are evaluating a question answering system.

Question: {query}
Expected Answer: {expected_answer}
Predicted Answer: {predicted_answer}

Does the predicted answer match the expected answer in meaning? 
Consider the answer CORRECT if:
- It conveys the same information as the expected answer
- It is factually accurate even if worded differently
- It fully addresses the question

Respond with only one of: CORRECT or INCORRECT

Grade:"""
    )

    graded_outputs = []
    for i, pred in enumerate(predictions):
        prompt = eval_prompt.format(
            query=pred["query"],
            expected_answer=examples[i]["answer"],
            predicted_answer=pred["result"]
        )

        evaluation = llm.invoke(prompt)
        graded_outputs.append({
            "text": evaluation.content.strip(),
            "score": 1 if "CORRECT" in evaluation.content.upper() else 0
        })

    return graded_outputs


settings.print("Evaluating predictions...\n")
graded_outputs = evaluate_qa_pairs(examples, predictions)

# Display results
settings.print("=" * 80)
settings.print("EVALUATION RESULTS")
settings.print("=" * 80)

correct_count = 0
for i, example in enumerate(examples):
    settings.print(f"\nExample {i + 1}:")
    settings.print(f"Question: {predictions[i]['query']}")
    settings.print(f"Real Answer: {predictions[i]['answer']}")
    settings.print(f"Predicted Answer: {predictions[i]['result']}")
    settings.print(f"Predicted Grade: {graded_outputs[i]['text']}")
    settings.print("-" * 80)

    if graded_outputs[i]['score'] == 1:
        correct_count += 1

# Summary statistics
accuracy = (correct_count / len(examples)) * 100 if examples else 0
settings.print(f"\n{'=' * 80}")
settings.print(f"SUMMARY")
settings.print(f"{'=' * 80}")
settings.print(f"Total Examples: {len(examples)}")
settings.print(f"Correct: {correct_count}")
settings.print(f"Incorrect: {len(examples) - correct_count}")
settings.print(f"Accuracy: {accuracy:.2f}%")
settings.print(f"{'=' * 80}\n")


def save_results_to_csv(examples: List[Dict], predictions: List[Dict],
                        graded_outputs: List[Dict], filename: str = "evaluation_results.csv"):
    """Save evaluation results to CSV file"""
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Question', 'Real Answer', 'Predicted Answer', 'Grade', 'Score'])

        for i in range(len(examples)):
            writer.writerow([
                predictions[i]['query'],
                predictions[i]['answer'],
                predictions[i]['result'],
                graded_outputs[i]['text'],
                graded_outputs[i]['score']
            ])

    settings.print(f"Results saved to {filename}")


save_results_to_csv(examples, predictions, graded_outputs)