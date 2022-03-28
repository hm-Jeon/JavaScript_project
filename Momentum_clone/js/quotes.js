const quotes = [
  {
    quote: "The way to het started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote: "Love the life you live. Live the life you love.",
    author: "Bob Marley",
  },
  {
    quote:
      "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
    author: "Marilyn Monroe",
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuote() {
  const randomInt = Math.floor(Math.random() * quotes.length);
  quote.innerText = `"${quotes[randomInt].quote}"`;
  author.innerText = quotes[randomInt].author;
}

randomQuote();
setInterval(randomQuote, 60000);
