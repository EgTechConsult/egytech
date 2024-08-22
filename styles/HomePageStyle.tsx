import { SxProps, Theme } from "@mui/material/styles";

export const homePageContainerStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  maxWidth: "100%",
  backgroundColor: (theme) => theme.palette.secondary.light, // Set the background color
};

export const homePageTitleStyle: SxProps<Theme> = {
  fontWeight: "bold",
  color: (theme) => theme.typography.h2,
  marginBottom: "20px",
  textAlign: "center",
  "@media (max-width: 600px)": {
    fontSize: "2rem",
  },
};

export const homePageDescriptionStyle: SxProps<Theme> = {
  fontSize: (theme) => theme.typography.body1.fontSize,
  color: "#666",
  textAlign: "left",
};
