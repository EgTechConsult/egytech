"use client";
// /styles/theme.ts
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom?: {
      primary?: {
        background_1?: string;
        background_2?: string;
        background_3?: string;
        background_4?: string;
        background_text_1?: string;
        background_text_2?: string;
        background_text_3?: string;
        background_text_4?: string;
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      primary?: {
        background_1?: string;
        background_2?: string;
        background_3?: string;
        background_4?: string;
        background_text_1?: string;
        background_text_2?: string;
        background_text_3?: string;
        background_text_4?: string;
      };
    };
  }
}

const theme = createTheme({
  // Colors
  palette: {
    primary: {
      main: "#333745", // Customize your primary color
      light: "#eef5db",
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
      color: "#194f37",
    },
  },
  custom: {
    primary: {
      background_1: "#00004d",
      background_2: "#002366",
      background_3: "#87ceeb",
      background_4: "#0197f6",
      background_text_1: "#87ceeb",
      background_text_2: "#89cff0",
      background_text_3: "#00004d",
      background_text_4: "#7E86A0",
    },
  },
});

export default theme;
