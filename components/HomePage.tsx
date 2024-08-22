"use client";

import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import {
  homePageTitleStyle,
  homePageDescriptionStyle,
  homePageContainerStyle,
} from "../styles/HomePageStyle";

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={homePageContainerStyle} maxWidth={false}>
      <Box>
        <Box>
          <Typography variant="h2" sx={homePageTitleStyle}>
            Welcome to Our Website
          </Typography>
          <Typography variant="body1" sx={homePageDescriptionStyle}>
            Explore our content and discover the best resources for your needs.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
