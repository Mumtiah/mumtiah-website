"use client";
import { Button, Box, Text } from "@chakra-ui/react";
import Buttons from "../button/Buttons";

export const HeroSection = () => (
  <Box bg={"#FEFFED"} m={0} width="full" px={{base:"16px", lg:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"90px"}}>
    <Text fontSize={{base:"20px", lg:"64px"}} fontWeight={"semibold"}>Mumtiah Modrasah</Text>
    <Text fontSize={{base:"14px", lg:"32px"}} width={{lg:"700px"}} mb={"24px"}>Welcome to Our Arabic & Islamic Studies School: Where Tradition Meets Enlightenment, And Knowledge Flourishes with Spiritual Insight.</Text>
    <Buttons text="Learn More" colorScheme="##002A11" variant="outline" />
  </Box>
);

