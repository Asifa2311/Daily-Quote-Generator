// Quotes array: 8 motivational quotes
const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Unknown",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Your limitation—it’s only your imagination.",
    author: "Unknown",
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
  },
  {
    text: "Sometimes later becomes never. Do it now.",
    author: "Unknown",
  }
];

const quoteTextEl = document.getElementById("quote-text");
const quoteAuthorEl = document.getElementById("quote-author");
const nextBtn = document.getElementById("next-btn");

let currentIndex = -1;

function getRandomIndex() {
  let randIndex;
  do {
    randIndex = Math.floor(Math.random() * quotes.length);
  } while (randIndex === currentIndex);
  return randIndex;
}

function showQuote() {
  // Fade out current quote
  quoteTextEl.classList.remove("visible");
  quoteAuthorEl.classList.remove("visible");

  // Wait for fade out transition to complete (~700ms)
  setTimeout(() => {
    currentIndex = getRandomIndex();
    const quote = quotes[currentIndex];
    quoteTextEl.textContent = `“${quote.text}”`;
    quoteAuthorEl.textContent = `— ${quote.author}`;

    // Fade in new quote
    quoteTextEl.classList.add("visible");
    quoteAuthorEl.classList.add("visible");
  }, 700);
}

// Initial load
window.addEventListener("DOMContentLoaded", showQuote);

// Button click event
nextBtn.addEventListener("click", showQuote);
