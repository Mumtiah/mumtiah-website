"use client";
import { Button, Box, Text } from "@chakra-ui/react";
import Buttons from "../button/Buttons";

export const HeroSection = () => (
  <Box bg={"#FDFFE4"} m={0} width="full" px={{base:"16px", lg:"50px", xl:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"90px"}}>
    <Text fontSize={{base:"20px", lg:"64px"}} fontWeight={"semibold"}>Mumtiah Modrasah</Text>
    <Text fontSize={{base:"14px", lg:"32px"}}  mb={"24px"}>Madrasatu-l-mumtiah is an Arabic institution of learning for every Muslim that is interested in gaining knowledge of the Deen. <br/><br/>
    Our admission offer accommodates anybody either beginners, intermediate, or advanced. Our classes are also flexible and can be done physically or on any platform feasible for the student.<br/><br/>
    We offer our services across the world as far as teaching knowledge of the Deen is concerned.</Text>
    <Buttons text="Learn More" colorScheme="##002A11" variant="outline" />
  </Box>
);

