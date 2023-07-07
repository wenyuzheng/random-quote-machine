import _ from "lodash";
import getRandomColor from "../../functions/getRandomColor";

describe("getRandomColor", () => {
  test("eg 1", () => {
    const result = getRandomColor("rgb(231, 76, 60)");
    expect(result === "rgb(231, 76, 60)").toEqual(false);
  });

  test("eg 2", () => {
    _.sample = (arr) => arr[0];
    const result = getRandomColor();
    expect(result).toEqual("rgb(231, 76, 60)");
  });
});
