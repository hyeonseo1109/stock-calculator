import { style } from "@vanilla-extract/css";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 100,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "3.5rem",
  padding: "0 2rem",
  backgroundColor: "#ffffff",
  borderBottom: "1.5px solid #e6f5eb",
  boxShadow: "0 1px 8px #41bd6812",
});

export const logo = style({
  fontSize: "1.05rem",
  fontWeight: "800",
  color: "#41bd68",
  letterSpacing: "-0.01em",
});

export const logoutButton = style({
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
      borderColor: "#e05555",
      color: "#e05555",
    },
  },
});