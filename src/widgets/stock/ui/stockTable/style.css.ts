import { style } from "@vanilla-extract/css";

export const tableCard = style({
  flex: 1,
  backgroundColor: "#ffffff",
  border: "1.5px solid #e6f5eb",
  borderRadius: "1.2rem",
  boxShadow: "0 2px 16px #41bd6814",
  overflow: "hidden",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
});

export const tableHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1.4rem",
  borderBottom: "1.5px solid #e6f5eb",
  gap: "1rem",
});

export const tableTitle = style({
  fontSize: "0.95rem",
  fontWeight: "700",
  color: "#1a1a1a",
  whiteSpace: "nowrap",
});

export const searchInput = style({
  height: "2.1rem",
  padding: "0 0.9rem",
  borderRadius: "50rem",
  border: "1.5px solid #e0e0e0",
  fontSize: "0.85rem",
  color: "#333",
  backgroundColor: "#fafafa",
  outline: "none",
  width: "12rem",
  transition: "border-color 0.2s, box-shadow 0.2s",
  selectors: {
    "&:focus": {
      borderColor: "#41bd68",
      boxShadow: "0 0 0 3px #41bd6818",
      backgroundColor: "#ffffff",
    },
  },
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

// 양수 → 빨간색
export const pos = style({
  color: "#e05555",
  fontWeight: "700",
});

// 음수 → 파란색
export const neg = style({
  color: "#3b82f6",
  fontWeight: "700",
});

export const stockBadge = style({
  display: "inline-block",
  padding: "0.2rem 0.7rem",
  borderRadius: "50rem",
  backgroundColor: "#f0faf3",
  border: "1px solid #d4f0dc",
  fontSize: "0.8rem",
  fontWeight: "600",
  color: "#41bd68",
  whiteSpace: "nowrap",
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

export const deleteButton = style({
  padding: "0.3rem 0.85rem",
  borderRadius: "50rem",
  border: "1.5px solid #e05555",
  color: "#e05555",
  fontSize: "0.78rem",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  whiteSpace: "nowrap",
  selectors: {
    "&:hover": {
      backgroundColor: "#e05555",
      color: "#ffffff",
    },
  },
});

export const actionButtons = style({
  display: "flex",
  gap: "0.4rem",
  justifyContent: "center",
});

export const emptyMessage = style({
  padding: "3rem",
  textAlign: "center",
  color: "#bbb",
  fontSize: "0.95rem",
});

export const favoriteBtn = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "0.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "transform 0.15s",
  selectors: {
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
});

export const favoriteActive = style({
  color: "#41bd68",
});

export const favoriteInactive = style({
  color: "#bdbdbd",
});

export const pagination = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.4rem",
  padding: "1rem",
  borderTop: "1px solid #f0f0f0",
  flexWrap: "wrap",
});

export const pageButton = style({
  minWidth: "2rem",
  height: "2rem",
  borderRadius: "0.5rem",
  border: "1px solid #dcdcdc",
  backgroundColor: "#fff",
  color: "#555",
  fontSize: "0.82rem",
  cursor: "pointer",
  padding: "0 0.7rem",
  transition: "all 0.15s",

  selectors: {
    "&:hover": {
      borderColor: "#41bd68",
      color: "#41bd68",
    },

    "&:disabled": {
      opacity: 0.4,
      cursor: "default",
    },
  },
});

export const activePageButton = style([
  pageButton,
  {
    backgroundColor: "#41bd68",
    borderColor: "#41bd68",
    color: "#fff",

    selectors: {
      "&:hover": {
        color: "#fff",
      },
    },
  },
]);

export const copyButton = style({
  padding: "0.3rem 0.85rem",
  borderRadius: "50rem",
  border: "1.5px solid #a3a3a3",
  color: "#a3a3a3",
  fontSize: "0.78rem",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s",
  whiteSpace: "nowrap",

  selectors: {
    "&:hover": {
      backgroundColor: "#a3a3a3",
      color: "#ffffff",
    },
  },
});
