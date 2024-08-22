import { SxProps, Theme } from "@mui/material";

// Define styles for the main content area
export const mainContentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

// /styles/layoutStyles.ts
// Add footer styles if needed
export const footerStyles: SxProps<Theme> = {
  py: 2,
  textAlign: "center",
  mt: "auto",
  backgroundColor: (theme) => theme.palette.secondary.main,
  color: "white",
};
