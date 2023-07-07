import _ from "lodash";
import getRandomQuote from "../../functions/getRandomQuote";

describe("getRandomQuote", () => {
  test("eg 1", () => {
    const quote = {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    };
    const result = getRandomQuote(quote);
    expect(result.text === quote.text).toEqual(false);
  });

  test("eg 2", () => {
    _.sample = (arr) => arr[0];
    const result = getRandomQuote();
    const expected = {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    };
    expect(result).toEqual(expected);
  });
});
