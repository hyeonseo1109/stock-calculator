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
  "@media": {
    "(max-width: 640px)": {
      width: "100%",
    },
  },
});

// 로그인 버튼과 로그인 input 두 개를 감싸는 wrapper
export const loginChatButtonWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "3rem",
  height: "15rem",
  "@media": {
    "(max-width: 640px)": {
      height: "auto",
      width: "100%",
    },
  },
});

//전체 엔티티
export const allLogin = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
  height: "70%",
  gap: "3rem",
  boxShadow: "0 0.6rem 0.7rem #41bd6822",
  background: `
    radial-gradient(circle at top left, rgba(247, 255, 87, 0.35), transparent 10%),
    radial-gradient(circle at bottom right, rgba(120, 220, 120, 0.45), transparent 30%),
    white
  `,
  borderRadius: "1rem",
  padding: "10rem 0",
  "@media": {
    "(max-width: 640px)": {
      width: "92%",
      padding: "4rem 1.5rem",
      height: "auto",
    },
  },
});

export const loginBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

export const signUpText = style({
  fontSize: "0.95rem",
  color: "#aaa",
});

export const signUpLink = style({
  color: "#41bd68",
  textDecoration: "none",
});

export const miniTitleError = style({
  fontSize: "1rem",
  color: "#e05555",
  fontWeight: "500",
});

export const errorText = style({
  fontSize: "0.78rem",
  color: "#e05555",
  fontWeight: "500",
  paddingLeft: "0.5rem",
  lineHeight: 1.4,
});
