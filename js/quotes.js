import * as root from "./root.js";

const quotes = [
  {
    quote: "I dream of painting and then I paint my dream.",
    author: "Vincent Van Gogh",
  },
  {
    quote: "The price of greatness is responsibility.",
    author: "Sir Winston Churchill",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin Delano Roosevelt",
  },
  {
    quote: "Where there is love there is life.",
    author: "Mohandas K. Gandhi",
  },
  {
    quote: "The truth is rarely pure and never simple.",
    author: "Oscar Wilde",
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
    quote: "Knowledge makes a man unfit to be a slave.",
    author: "Frederick Douglass",
  },
  {
    quote: "Life is made of ever so many partings welded together.",
    author: "Charles Dickens",
  },
  {
    quote: "In the end, everything is a gag.",
    author: "Charlie Chaplin",
  },
];

function randomQuote() {
  const randomInt = Math.floor(Math.random() * quotes.length);
  root.quote.innerText = `"${quotes[randomInt].quote}"`;
  root.author.innerText = quotes[randomInt].author;
}

randomQuote();
setInterval(randomQuote, 60000);
