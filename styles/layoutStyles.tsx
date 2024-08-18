import { SxProps, Theme } from "@mui/material";

// Define styles for the main content area
export const mainContentStyles: SxProps<Theme> = {
  pt: 8, // Padding top to account for the AppBar height
  display: "flex",
  flexDirection: "column",
};

// /styles/layoutStyles.ts
// Add footer styles if needed
export const footerStyles: SxProps<Theme> = {
  py: 2,
  textAlign: "center",
  mt: "auto",
  backgroundColor: (theme) => theme.palette.primary.main,
  color: "white",
};
