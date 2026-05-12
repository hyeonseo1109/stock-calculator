import { style } from "@vanilla-extract/css";

export const formWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.1rem",
  backgroundColor: "#ffffff",
  border: "1.5px solid #e6f5eb",
  borderRadius: "1.2rem",
  padding: "2rem 1.8rem",
  boxShadow: "0 2px 16px #41bd6814",
  width: "100%",
  maxWidth: "22rem",
  flexShrink: 0,
  "@media": {
    "(max-width: 768px)": {
      maxWidth: "100%",
    },
  },
});

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
});

export const label = style({
  fontSize: "0.78rem",
  fontWeight: "600",
  color: "#41bd68",
  letterSpacing: "0.03em",
});

export const input = style({
  width: "100%",
  height: "2.7rem",
  padding: "0 1rem",
  borderRadius: "0.6rem",
  border: "1.5px solid #e0e0e0",
  fontSize: "0.95rem",
  color: "#222",
  backgroundColor: "#fafafa",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  selectors: {
    "&:focus": {
      borderColor: "#41bd68",
      boxShadow: "0 0 0 3px #41bd6820",
      backgroundColor: "#ffffff",
    },
  },
});

export const divider = style({
  width: "100%",
  height: "1px",
  backgroundColor: "#eef5f1",
  margin: "0.2rem 0",
});

export const saveButton = style({
  width: "100%",
  height: "2.8rem",
  borderRadius: "50rem",
  background: "linear-gradient(135deg, #41bd68 0%, #80df57 100%)",
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "700",
  cursor: "pointer",
  border: "none",
  letterSpacing: "0.05em",
  boxShadow: "0 2px 8px #41bd6830",
  transition: "opacity 0.2s, transform 0.1s",
  selectors: {
    "&:hover:not(:disabled)": {
      opacity: 0.9,
    },
    "&:active:not(:disabled)": {
      transform: "scale(0.98)",
    },
    "&:disabled": {
      background: "#f0f0f0",
      boxShadow: "none",
      cursor: "not-allowed",
      color: "#bdbdbd",
    },
  },
});

export const resultLabel = style({
  fontSize: "0.78rem",
  fontWeight: "600",
  color: "#41bd68",
  letterSpacing: "0.03em",
  marginBottom: "0.2rem",
});

export const resultBox = style({
  display: "flex",
  alignItems: "center",
  borderRadius: "0.8rem",
  backgroundColor: "#f6fff9",
  border: "1.5px solid #d4f0dc",
  padding: "1rem 0.5rem",
  gap: "0",
});

export const resultItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flex: 1,
  gap: "0.3rem",
});

export const resultDivider = style({
  width: "1px",
  height: "2rem",
  backgroundColor: "#d4f0dc",
});

export const resultKey = style({
  fontSize: "0.72rem",
  color: "#999",
  fontWeight: "500",
});

export const resultValuePos = style({
  fontSize: "1rem",
  fontWeight: "700",
  color: "#41bd68",
});

export const resultValueNeg = style({
  fontSize: "1rem",
  fontWeight: "700",
  color: "#e05555",
});

export const resultValueNeutral = style({
  fontSize: "1rem",
  fontWeight: "700",
  color: "#222",
});
