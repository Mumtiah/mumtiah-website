"use client";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "./components/home/HeroSection";
import { Donation } from "./components/home/Donation";
import { ApplyNow } from "./components/home/ApplyNow";
import Ourprograms from "./components/home/Ourprograms";
import Community from "./components/home/Community";


const Home = () => (
  <Box width="full">
    <HeroSection />
    <Donation />
    <ApplyNow />
    <Ourprograms />
    <Community headText="Join Our Community" subText="Ready to embark on a transformative learning journey? Enroll now at our school website and gain access to a wealth of knowledge, expert guidance, and a vibrant community of learners. Your future awaits – take the first step today!"/>
  </Box>
);

export default Home;
