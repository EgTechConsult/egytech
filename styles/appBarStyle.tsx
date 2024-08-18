import { SxProps, Theme } from "@mui/material";

export const appBarStyles: SxProps<Theme> = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it sits above other content
};
