import merge from "deepmerge";
import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui";
import typography from "./typography";
import styles from "./styles";
import colors from "./colors";

const myOverrides = {
  fonts: {
    body: "Roboto, sans-serif",
  },
  sizes: {
    container: 768,
  },
  typography,
  styles,
  colors,
  buttons: {
    primary: {
      color: "noticeMe",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
    secondary: {
      color: "background",
      bg: "secondary",
    },
  },
};
console.log("colors", merge(baseTheme, myOverrides));

export default merge(baseTheme, myOverrides);
