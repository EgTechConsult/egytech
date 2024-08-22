"use client";

// /components/Footer.tsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { footerStyles } from "../../styles/layoutStyles";

const Footer = () => {
  const theme = useTheme(); // Access the theme directly using useTheme hook

  return (
    <Box component="footer" sx={footerStyles}>
      <Typography variant="body1">
        © 2024 My Web Application. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
