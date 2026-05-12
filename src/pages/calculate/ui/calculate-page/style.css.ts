import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  backgroundColor: "#ffffff",
  overflow: "hidden",
});

// 데스크탑
export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2.5rem 1.5rem",
  gap: "2rem",
  flex: 1,
  overflowY: "auto",
  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
});

export const contentArea = style({
  display: "flex",
  gap: "2rem",
  width: "100%",
  maxWidth: "72rem",
  alignItems: "flex-start",
});

// 모바일 슬라이더
export const mobileSliderWrapper = style({
  display: "none",
  flexDirection: "column",
  flex: 1,
  overflow: "hidden",
  position: "relative",
  userSelect: "none",
  "@media": {
    "(max-width: 768px)": {
      display: "flex",
    },
  },
});

export const mobileSlider = style({
  display: "flex",
  flex: 1,
  transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  willChange: "transform",
});

export const mobilePage = style({
  minWidth: "100%",
  height: "100%",
  overflowY: "auto",
  padding: "1.5rem 1rem",
  boxSizing: "border-box",
});

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1.5rem",
  padding: "0.8rem 0",
  borderTop: "1px solid #e6f5eb",
  backgroundColor: "#ffffff",
  flexShrink: 0,
});

export const pageBtn = style({
  width: "2.4rem",
  height: "2.4rem",
  borderRadius: "50%",
  border: "1.5px solid #41bd68",
  color: "#41bd68",
  fontSize: "0.9rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#41bd68",
      color: "#ffffff",
    },
  },
});

export const pageBtnDisabled = style({
  opacity: 0.3,
  cursor: "default",
  borderColor: "#ccc",
  color: "#ccc",
});

export const pageIndicator = style({
  fontSize: "0.85rem",
  fontWeight: "600",
  color: "#555",
  minWidth: "2rem",
  textAlign: "center",
});

export const pageTitle = style({
  fontSize: "1.6rem",
  fontWeight: "800",
  color: "#1a1a1a",
});
