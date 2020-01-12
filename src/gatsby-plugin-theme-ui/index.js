import merge from "deepmerge";
import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";
import typography from "./typography";
import styles from "./styles";
import colors from "./colors";
// console.log("baseTheme",baseTheme);
const myOverrides = {
  fonts: {
    body: "Roboto, sans-serif"
  },
  sizes: {
    container: 768
  },
  typography,
  styles,
  colors
};

console.log("merged theme", merge(baseTheme, myOverrides));

export default merge(baseTheme, myOverrides);
