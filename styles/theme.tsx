"use client";
// /styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Colors
  palette: {
    primary: {
      main: "#2A1454", // Customize your primary color
      light: "#211454",
    },
    secondary: {
      main: "#532B88", // Customize your secondary color
      light: "#f6f7eb",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      color: "#e94f37",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
