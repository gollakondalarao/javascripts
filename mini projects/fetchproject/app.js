const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

async function fetchQuote() {
  quoteText.textContent = 'Loading...';
  quoteAuthor.textContent = '';

  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = 'Failed to fetch a new quote. Please try again later.';
  }
}

newQuoteButton.addEventListener('click', fetchQuote);

fetchQuote();
