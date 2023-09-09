"use client";
import { Button, Box, Text, Image } from "@chakra-ui/react";

export const Donation = () => (
  <Box 
    color={"#FEFFED"} 
    m={0} width="full" 
    px={{ base: "16px", lg: "100px" }} 
    bg={"#002A11"} 
    py={{ base: "40px", lg: "120px" }}
  >
    <Text 
      fontSize={{ base: "14px", lg: "32px" }} 
      fontWeight={"semibold"} width={{ lg: "700px" }} 
      mb={"24px"} color={"#FBFFC9"}>
      We Need Donation
    </Text>
    <Image width="100%" height="100%" src="/images/mosque.png" alt="Image Alt" />
    <Text 
      fontSize={{ base: "32px", lg: "48px" }} 
      fontWeight={"medium"} width={{ lg: "583px" }} 
      my={{base:"8px", lg:"32px"}} color={"#FBFFC9"}>
      Support Build Mumtiah Project
    </Text>
    <Text 
      fontSize={{ base: "14px", lg: "24px" }} 
      fontWeight={"medium"} width={{ lg: "932px" }} 
      my={{lg:"32px"}}>
        Help us make a difference by contributing to the development of our Learning and Development Institute. Your generous donation will directly support the expansion of our programs, resources, and outreach efforts. Together, we can empower individuals to thrive and drive positive change. Donate now to be a part of our mission!
    </Text>
    <Button
      borderRadius={"12px"} mt={8}
      px="40px" fontWeight={"semibold"} 
      py="30px" colorScheme={"green"} w={{base: "full", md: "auto"}}>
      Donate Now
      </Button>
  </Box>
);

