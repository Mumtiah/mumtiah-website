"use client";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/home/HeroSection";
import { Donation } from "./components/home/Donation";
import { ApplyNow } from "./components/home/ApplyNow";

const Home = () => (
  <Box width="full">
    <HeroSection />
    <Donation />
    <ApplyNow />
  </Box>
);

export default Home;
