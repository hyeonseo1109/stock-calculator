import { style } from "@vanilla-extract/css";

export const tableCard = style({
  flex: 1,
  backgroundColor: "#ffffff",
  border: "1.5px solid #e6f5eb",
  borderRadius: "1.2rem",
  boxShadow: "0 2px 16px #41bd6814",
  overflow: "hidden",
  minWidth: 0,
});

export const tableScroll = style({
  overflowX: "auto",
  width: "100%",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "600px",
});

export const th = style({
  padding: "0.9rem 1rem",
  fontSize: "0.78rem",
  fontWeight: "700",
  color: "#41bd68",
  backgroundColor: "#f0faf3",
  textAlign: "center",
  borderBottom: "1.5px solid #d4f0dc",
  whiteSpace: "nowrap",
  letterSpacing: "0.03em",
});

export const thMemo = style({
  minWidth: "8rem",
  textAlign: "left",
});

export const tr = style({
  transition: "background-color 0.15s",
  selectors: {
    "&:hover": {
      backgroundColor: "#f6fff9",
    },
    "&:not(:last-child)": {
      borderBottom: "1px solid #f0f0f0",
    },
  },
});

export const td = style({
  padding: "0.85rem 1rem",
  fontSize: "0.9rem",
  color: "#333",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
});

export const tdMemo = style({
  textAlign: "left",
  color: "#888",
  fontSize: "0.85rem",
  whiteSpace: "normal",
  wordBreak: "break-all",
  maxWidth: "12rem",
});

export const pos = style({
  color: "#41bd68",
  fontWeight: "700",
});

export const neg = style({
  color: "#e05555",
  fontWeight: "700",
});

export const editButton = style({
  padding: "0.3rem 0.85rem",
  borderRadius: "50rem",
  border: "1.5px solid #41bd68",
  color: "#41bd68",
  fontSize: "0.78rem",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      backgroundColor: "#41bd68",
      color: "#ffffff",
    },
  },
});

export const emptyMessage = style({
  padding: "3rem",
  textAlign: "center",
  color: "#bbb",
  fontSize: "0.95rem",
});
