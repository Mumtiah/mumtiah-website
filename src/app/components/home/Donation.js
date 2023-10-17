"use client";
import { Box, Text, Image } from "@chakra-ui/react";
import Buttons from "../button/Buttons";

export const Donation = () => (
  <Box 
    color={"#FDFFE4"} 
    m={0} width="full" 
    px={{ base: "16px", lg: "50px", xl:"100px" }} 
    bg={"#002A11"} 
    py={{ base: "40px", lg: "120px" }}
  >
    <Text 
      fontSize={{ base: "14px", lg: "32px" }} 
      fontWeight={"semibold"} width={{ lg: "700px" }} 
      mb={"24px"} color={"#FBFFC9"}>
      SUPPORT OUR BUILD MUMTIAH PROJECT
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
      fontWeight={"medium"}  
      my="32px">
       <Text as="i"> Who is it that would loan Allah a godly loan except that He will multiply it for him... Q57v11</Text><br/><br/>
        As an institution whose aim and mission is to spread the knowledge of the Deen across the world, our numbers have grown and our impact is being felt to the extent that the location and capacity of our current madrasah can contain.<br/><br/>
        The plan is to not relent nor back down in doing the work of Allah, hence, we have plans of buying land and erecting our own Madrasah and masjid on it. <br/><br/>
        Plans are already underway but execution is not close as we are still below the budget of our project.<br/><br/>
        The Build Mumtiah Mosque project is budgeted at #100,000,000 and thus far, we have been able to raise #5.5M and $630. Kindly support this meritorious project.
    </Text>
    <Buttons width={{ base: "full", md: "auto"}} text="Donate Now" colorScheme="#008B37" variant="solid" bg="#008B37" />
  </Box>
);

