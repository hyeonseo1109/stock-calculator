import { style } from "@vanilla-extract/css";

export const loginTitle = style({
  display: "flex",
  color: "black",
});

// 로그인 input 두 개를 감싸는 wrapper
export const loginChatWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "20rem",
  height: "100%",
  justifyContent: "space-between",
});

// 로그인 input (아이디, 비밀번호)
export const loginChatInput = style({
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "0.5rem",
  padding: "1rem",
  width: "100%",
  height: "2.5rem",
});

// 로그인 버튼
export const loginChatButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "4rem",
  height: "100%",
  padding: "0.5rem",
  backgroundColor: "#4c4c4c",
  color: "#fff",
  borderRadius: "0.5rem",
});

// 로그인 버튼과 로그인 input 두 개를 감싸는 wrapper
export const loginChatButtonWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "1rem",
  height: "6rem",
});
