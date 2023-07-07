import { useState } from "react";
import "./css/QuoteBox.css";
import { SocialIcon } from "react-social-icons";
import getRandomQuote from "../functions/getRandomQuote";
import getRandomColor from "../functions/getRandomColor";

const QuoteBox = ({ color, setBgColor }) => {
  const [quote, setQuote] = useState(getRandomQuote());

  const newQuoteHandler = () => {
    setQuote(getRandomQuote(quote));
    setBgColor(getRandomColor(color));
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote.text} By ${quote.author}`;

  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">-{quote.author}</div>
      <div id="button-box">
        <a id="tweet-quote" href={tweetUrl}>
          <SocialIcon network="twitter" bgColor={color} />
        </a>
        <button
          id="new-quote"
          onClick={newQuoteHandler}
          style={{ backgroundColor: color }}
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
