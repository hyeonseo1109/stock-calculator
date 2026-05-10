import { style } from "@vanilla-extract/css";

// 로그인 input (아이디, 비밀번호)
export const loginInput = style({
  borderRadius: "50rem",
  padding: "1rem",
  width: "100%",
  height: "2.5rem",

  // 파랑보라빛 그라데이션
  // boxShadow: "0 0.2rem 0.7rem #0011ff33",

  // 연두빛 그라데이션
  boxShadow: "0 0.15rem 0.7rem #41bd6833",
});
loginInput;
