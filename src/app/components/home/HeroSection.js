"use client";
import { Button, Box, Text } from "@chakra-ui/react";

export const HeroSection = () => (
  <Box bg={"#FEFFED"} m={0} width="full" px={{base:"16px", lg:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"90px"}}>
    <Text fontSize={{base:"20px", lg:"64px"}} fontWeight={"semibold"}>Mumtiah Modrasah</Text>
    <Text fontSize={{base:"14px", lg:"32px"}} width={{lg:"700px"}} mb={"24px"}>Welcome to Our Arabic & Islamic Studies School: Where Tradition Meets Enlightenment, And Knowledge Flourishes with Spiritual Insight.</Text>
    <Button variant={"outline"} borderRadius={"12px"} px="40px" fontWeight={"semibold"} py="30px" colorScheme={"#002A11"}>Learn More</Button>
  </Box>
);

