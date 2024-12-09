import openai

openai.api_key = 'your-openai-api-key'

# Function to analyze sentiment using OpenAI API
def analyze_sentiment(text):
    # Use the GPT-3 model to analyze sentiment by prompting it with a specific task
    prompt = f"Analyze the sentiment of the following text and classify it as Positive, Neutral, or Negative:\n\n{text}\n\nSentiment:"
    
    response = openai.Completion.create(
        engine="text-davinci-003",  # You can change which model you use
        prompt=prompt,
        max_tokens=60,  # Adjust the token limit based on the prompt length
        temperature=0.0,  # Set temperature to 0 for deterministic output
    )
    
    # Extract sentiment from the response
    sentiment = response.choices[0].text.strip()
    return sentiment

# Example usage
text1 = "I love the way the government is handling the economy."
text2 = "The political environment is getting worse every day."
text3 = "The economy is stable with no major changes."

print(f"Sentiment for text1: {analyze_sentiment(text1)}")
print(f"Sentiment for text2: {analyze_sentiment(text2)}")
print(f"Sentiment for text3: {analyze_sentiment(text3)}")
