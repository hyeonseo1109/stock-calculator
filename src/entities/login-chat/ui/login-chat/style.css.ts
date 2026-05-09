import { style } from "@vanilla-extract/css";

export const loginChat = style({
  display: "flex",
  color: "black",
});

export const loginChatInput = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const loginChatButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  padding: "0.5rem",

  backgroundColor: "#111",
  color: "#fff",
});
