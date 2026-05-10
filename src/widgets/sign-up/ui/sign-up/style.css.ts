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

export const loginBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  height: "70%",
  boxShadow: "0 0.6rem 0.7rem #41bd6822",
  borderRadius: "1rem",
  padding: "10rem 0",
  // background:
  //   "linear-gradient(160deg, #ffffff 80%, #c4df5933 90%, #80df5977 100%), linear-gradient(15deg, #ffe0b8 0%, #df8a59 100%)",
  background: `
    radial-gradient(
      circle at top left,
      rgba(247, 255, 87, 0.35),
      transparent 10%
    ),

    radial-gradient(
      circle at bottom right,
      rgba(120, 220, 120, 0.45),
      transparent 30%
    ),

    white
  `,
});

export const signUpText = style({
  fontSize: "0.95rem",
  color: "#aaa",
});

export const signUpLink = style({
  color: "#41bd68",
  textDecoration: "none",
});
