import _ from "lodash";
import colors from "../constant/colors";

const getRandomColor = (currColor = null) => {
  let color = _.sample(colors);
  while (currColor && color === currColor) {
    color = _.sample(colors);
  }
  return color;
};

export default getRandomColor;
