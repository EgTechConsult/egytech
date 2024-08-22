import { SxProps, Theme, ThemeOptions } from "@mui/material/styles";

export const homePageContainerStyle: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  maxWidth: "100%",
  backgroundColor: theme.custom?.primary?.background_1, // Set the background color
});

export const homePageTitleStyle: SxProps<Theme> = (theme) => ({
  fontWeight: "bold",
  color: theme.custom?.primary?.background_text_1,
  marginBottom: "20px",
  textAlign: "center",
  "@media (max-width: 600px)": {
    fontSize: "2rem",
  },
});

export const homePageDescriptionStyle: SxProps<Theme> = (theme) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.custom?.primary?.background_text_1,
  textAlign: "left",
});
