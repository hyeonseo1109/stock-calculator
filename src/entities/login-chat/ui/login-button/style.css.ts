import { style } from "@vanilla-extract/css";

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
  background: "linear-gradient(180deg, #41bd68 0%, #41bd68 100%)",
  color: "#fff",
  borderRadius: "50rem",
});
