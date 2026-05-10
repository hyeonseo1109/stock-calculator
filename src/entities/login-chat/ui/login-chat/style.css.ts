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

// 로그인 input (아이디, 비밀번호)
export const loginChatInput = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: "50rem",
  padding: "1rem",
  width: "100%",
  height: "2.5rem",
  // 파랑보라빛 그라데이션
  // boxShadow: "0 0.2rem 0.7rem #0011ff33",
  boxShadow: "0 0.2rem 0.7rem #41bd6833",
});

// 로그인 버튼
export const loginChatButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "10rem",
  height: "2.5rem",
  padding: "0.5rem",
  // backgroundColor: "#0011ff33",
  //예뿐 보라-흰색-파랑 그라데이션
  // background: "linear-gradient(180deg, #5900ff33 0%, #0011ff66 100%)",
  background: "linear-gradient(180deg, #41bd68 0%, #80df59 100%)",
  color: "#fff",
  borderRadius: "50rem",
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
});
