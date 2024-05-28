import React from "react";
// import React, { useState } from "react";
import { Box } from "@mui/material";
import Exercise from "../components/Exercise";
import HeroBanner from "../components/HeroBanner";
import SearchExcercise from "../components/SearchExcercise";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercise />
      <Exercise />
    </Box>
  );
};

export default Home;
