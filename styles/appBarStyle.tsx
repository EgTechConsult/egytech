import { SxProps, Theme } from "@mui/material";

export const appBarIconStyle: SxProps<Theme> = (theme) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1, // Ensure it sits above other content
  color: theme.custom?.primary?.background_text_1,
  background: theme.custom?.primary?.background_1,
});

export const appBarContainerStyle: SxProps<Theme> = {
  background: (theme) => theme.custom?.primary?.background_1,
};
