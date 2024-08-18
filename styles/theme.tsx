"use client";
// /styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A1454", // Customize your primary color
    },
    secondary: {
      main: "#532B88", // Customize your secondary color
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
