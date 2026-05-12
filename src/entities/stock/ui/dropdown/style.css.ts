import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  width: "100%",
});

export const trigger = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "3rem",
  padding: "0 1rem",
  border: "1px solid #dcdcdc",
  borderRadius: "0.7rem",
  backgroundColor: "#ffffff",
  cursor: "pointer",
  transition: "0.2s",
});

export const triggerText = style({
  fontSize: "0.95rem",
  color: "#222222",
});

export const icon = style({
  fontSize: "0.7rem",
  color: "#777777",
});

export const menu = style({
  position: "absolute",
  top: "3.3rem",
  left: 0,
  width: "100%",
  backgroundColor: "#ffffff",
  border: "1px solid #dcdcdc",
  borderRadius: "0.7rem",
  overflow: "hidden",
  zIndex: 100,
});

export const option = style({
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  cursor: "pointer",
  fontSize: "0.95rem",
  color: "#222",
  selectors: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});

// 전체보기 전용
export const optionBold = style({
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  cursor: "pointer",
  fontSize: "0.95rem",
  color: "#222",
  fontWeight: "700",
  selectors: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});
