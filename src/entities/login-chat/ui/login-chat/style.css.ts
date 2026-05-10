import { style } from "@vanilla-extract/css";

export const loginTitle = style({
  display: "flex",
  color: "black",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
});

export const title = style({
  fontSize: "1.7rem",
  fontWeight: "bold",
});

export const miniTitle = style({
  fontSize: "1.2rem",
});

// 로그인 input 두 개를 감싸는 wrapper
export const loginChatWrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "20rem",
  height: "auto",
  gap: "1rem",
});

// 로그인 버튼과 로그인 input 두 개를 감싸는 wrapper
export const loginChatButtonWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
  height: "15rem",
});

//전체 엔티티
export const allLogin = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "3rem",
});
