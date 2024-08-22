import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Toolbar } from "@mui/material";
import theme from "../styles/theme";
import "./globals.css";
import { Box } from "@mui/material";
import { mainContentStyles } from "../styles/layoutStyles";

// Components.
import ResponsiveAppBar from "../components/mui/AppBar";
import Footer from "../components/mui/Footer";

export const metadata = {
  title: "EgTech",
  description: "EgTech project webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveAppBar />
          <Toolbar></Toolbar>
          <Box component="main" sx={mainContentStyles}>
            {children}
          </Box>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
