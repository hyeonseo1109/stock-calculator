import { style } from "@vanilla-extract/css";

// 전체 박스 래퍼
export const mainBox = style({
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
});

// h1 제목 안녕하세요
export const mainTitle = style({
  fontSize: "4rem",
  fontWeight: "extrabold",
  color: "#ffffff",
  marginBottom: "1rem",
  margin: 0,
});

// p 텍스트 주종목계산기에 오신 것을 환영합니다.
export const mainText = style({
  fontSize: "1.6rem",
  color: "#e1ffe5",
  margin: 0,
});

// 텍스트 박스 래퍼
export const mainTitleBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "end",
  // gap: "1rem",
});

export const rightBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
  alignItems: "end",
  gap: "2rem",
  flexShrink: 0,
  margin: "2rem",
});

export const leftBox = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  gap: "2rem",
  backgroundColor: "#fffef7",
  borderRadius: "3rem",
  boxShadow: "0 0.2rem 0.7rem #4cc36577",
  padding: "2rem",
  width: "33%",
  margin: "2rem 5rem",
  height: "85%",
});

export const accountBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

// 시작하기
export const startButton = style({
  padding: "0.8rem 2.8rem",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#7dde58",
  backgroundColor: "#ffffff",
  borderRadius: "50rem",
  boxShadow: "0 0.2rem 0.7rem #4cc36555",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#e1f1e7",
  },
});

export const descriptionText = style({
  fontSize: "0.85rem",
  lineHeight: "1.8",
  color: "#0b2a12",
  wordBreak: "keep-all",
});
