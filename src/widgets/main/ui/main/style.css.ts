import { style } from "@vanilla-extract/css";

export const main = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3rem",
  padding: "5rem 1.5rem 4rem",
  flex: 1,
  overflowY: "auto",
});

export const heroSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  textAlign: "center",
  maxWidth: "36rem",
});

export const greeting = style({
  fontSize: "1rem",
  color: "#e1ffe5",
  fontWeight: "500",
  letterSpacing: "0.02em",
});

export const title = style({
  fontSize: "3.8rem",
  fontWeight: "900",
  color: "#ffffff",
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
  margin: 0,
});

export const subtitle = style({
  fontSize: "1.1rem",
  color: "#d4f5dc",
  margin: 0,
});

export const startButton = style({
  marginTop: "0.5rem",
  padding: "0.85rem 2.4rem",
  fontSize: "1rem",
  fontWeight: "700",
  color: "#41bd68",
  backgroundColor: "#ffffff",
  borderRadius: "50rem",
  boxShadow: "0 4px 20px #00000018",
  cursor: "pointer",
  transition: "transform 0.15s, box-shadow 0.15s",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 24px #00000025",
    },
  },
});

export const cardRow = style({
  display: "flex",
  gap: "1.5rem",
  width: "100%",
  maxWidth: "52rem",
  "@media": {
    "(max-width: 640px)": {
      flexDirection: "column",
    },
  },
});

export const card = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  backgroundColor: "#ffffffcc",
  backdropFilter: "blur(8px)",
  borderRadius: "1.2rem",
  padding: "1.8rem",
  boxShadow: "0 2px 16px #00000010",
});

export const cardTitle = style({
  fontSize: "1rem",
  fontWeight: "700",
  color: "#1a1a1a",
});

export const cardText = style({
  fontSize: "0.88rem",
  color: "#444",
  lineHeight: 1.8,
  wordBreak: "keep-all",
});

export const signUpButton = style({
  marginTop: "0.4rem",
  alignSelf: "flex-start",
  padding: "0.5rem 1.2rem",
  fontSize: "0.88rem",
  fontWeight: "700",
  color: "#ffffff",
  background: "linear-gradient(135deg, #41bd68 0%, #80df57 100%)",
  borderRadius: "50rem",
  boxShadow: "0 2px 8px #41bd6830",
  transition: "opacity 0.15s",
  selectors: {
    "&:hover": {
      opacity: 0.88,
    },
  },
});
