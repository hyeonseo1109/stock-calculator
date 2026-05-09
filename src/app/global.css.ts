import { globalStyle } from "@vanilla-extract/css";

/* box-sizing */
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

/* margin reset */
globalStyle("*", {
  margin: 0,
  padding: 0,
});

/* html */
globalStyle("html", {
  fontSize: "16px",
  WebkitTextSizeAdjust: "100%",
});

/* body */
globalStyle("body", {
  minHeight: "100vh",

  lineHeight: 1.5,

  textRendering: "optimizeSpeed",

  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',

  backgroundColor: "#fff",
  color: "#111",

  overflowX: "hidden",
});

/* media */
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

/* form elements */
globalStyle("input, button, textarea, select", {
  font: "inherit",
  border: "none",
  background: "none",
  outline: "none",
});

/* button */
globalStyle("button", {
  cursor: "pointer",
});

/* link */
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

/* list */
globalStyle("ul, ol", {
  listStyle: "none",
});

/* table */
globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

/* root */
globalStyle("#root", {
  minHeight: "100vh",
});
