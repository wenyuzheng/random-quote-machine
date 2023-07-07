import _ from "lodash";
import quotes from "../constant/quotes";

const getRandomQuote = (currQuote = null) => {
  let quote = _.sample(quotes);
  while (currQuote && quote.text === currQuote.text) {
    quote = _.sample(quotes);
  }
  return quote;
};

export default getRandomQuote;
