"use client";
import { Button, Box, Text } from "@chakra-ui/react";

export const ApplyNow = () => (
  <Box bg={"#FDFFE4"} m={0} width="full" px={{base:"16px", lg:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"64px"}}>
    <Text fontSize={{base:"20px", lg:"48px"}} fontWeight={"semibold"}>Mumtiah Modrasah</Text>
    <Text fontSize={{base:"14px", lg:"24px"}} width={{lg:"883px"}} mb={"24px"}>Embark on a journey of growth and learning by enrolling in our school's website. Discover a world of knowledge, interactive courses, and expert guidance that will help you reach your goals. Join our community of learners today and take the first step towards a brighter future!</Text>
    <Button variant={"outline"} borderRadius={"12px"} px="40px" fontWeight={"semibold"} py="30px" colorScheme={"#002A11"}>Learn More</Button>
  </Box>
);

