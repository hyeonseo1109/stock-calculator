import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#ffffff",
});

export const inner = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2.5rem 1.5rem",
  gap: "2rem",
  flex: 1,
});

export const pageTitle = style({
  fontSize: "1.6rem",
  fontWeight: "800",
  color: "#1a1a1a",
  alignSelf: "flex-start",
  width: "100%",
  maxWidth: "72rem",
  paddingLeft: "0.5rem",
  borderLeft: "4px solid #41bd68",
});

export const contentArea = style({
  display: "flex",
  gap: "2rem",
  width: "100%",
  maxWidth: "72rem",
  alignItems: "flex-start",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});
