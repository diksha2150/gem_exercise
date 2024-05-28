import React from "react";
import { Box, Button, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
        Check out the most ef fective exercise
      </Typography>
      \<Button variant="contained">Exercise Explore</Button>
    </Box>
  );
};

export default HeroBanner;
