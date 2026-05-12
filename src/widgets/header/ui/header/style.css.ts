import { style } from "@vanilla-extract/css";

const headerBase = style({
  position: "sticky",
  top: 0,
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "3.5rem",
  padding: "0 2rem",
});

// 메인페이지용 (초록 배경 위)
export const headerDark = style([
  headerBase,
  {
    backgroundColor: "#ffffff28",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #ffffff40",
  },
]);

// 계산페이지용 (흰 배경 위)
export const headerLight = style([
  headerBase,
  {
    backgroundColor: "#ffffff",
    borderBottom: "1.5px solid #e6f5eb",
    boxShadow: "0 1px 8px #41bd6812",
  },
]);

export const logoDark = style({
  fontSize: "1.05rem",
  fontWeight: "800",
  color: "#ffffff",
  letterSpacing: "-0.01em",
});

export const logoLight = style({
  fontSize: "1.05rem",
  fontWeight: "800",
  color: "#41bd68",
  letterSpacing: "-0.01em",
});

export const right = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

export const greetingDark = style({
  fontSize: "0.85rem",
  fontWeight: "500",
  color: "#ffffff",
  opacity: 0.9,
});

export const greetingLight = style({
  fontSize: "0.85rem",
  fontWeight: "500",
  color: "#555",
});

export const logoutButtonDark = style({
  padding: "0.4rem 1.1rem",
  borderRadius: "50rem",
  border: "1.5px solid #ffffff80",
  color: "#ffffff",
  fontSize: "0.82rem",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  selectors: {
    "&:hover": {
      backgroundColor: "#ffffff25",
      borderColor: "#ffffff",
    },
  },
});

export const logoutButtonLight = style({
  padding: "0.4rem 1.1rem",
  borderRadius: "50rem",
  border: "1.5px solid #e0e0e0",
  color: "#888",
  fontSize: "0.82rem",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  selectors: {
    "&:hover": {
      borderColor: "#838383",
      color: "#636363",
    },
  },
});
