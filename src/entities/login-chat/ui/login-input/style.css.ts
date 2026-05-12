import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  width: "100%",
});

export const loginInput = style({
  borderRadius: "50rem",
  padding: "0 2.8rem 0 1rem",
  width: "100%",
  height: "2.5rem",
  boxShadow: "0 0.15rem 0.7rem #41bd6833",
});

export const toggleButton = style({
  position: "absolute",
  right: "0.9rem",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "1rem",
  lineHeight: 1,
  padding: 0,
  display: "flex",
  alignItems: "center",
  opacity: 0.6,
  transition: "opacity 0.15s",
  selectors: {
    "&:hover": {
      opacity: 1,
    },
  },
});

export const toggleIcon = style({
  width: "1.2rem",
  height: "auto",
});
