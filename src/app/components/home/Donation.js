"use client";
import { Box, Text, Image } from "@chakra-ui/react";
import Buttons from "../button/Buttons";
import Link from "next/link";

export const Donation = () => (
  <>
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
    <Image width="100%" height="100%" src="/images/build.jpeg" alt="Building" />
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
        The plan is to not relent nor back down in doing the work of Allah, hence, we have plans of buying land and erecting our own Madrasah and masjid on it. <br/>
        Plans are already underway but execution is not close as we are still below the budget of our project.<br/>
        We've secured a property in Bariga, Lagos and we are in the process of raising funds to build a mosque and madrasah on it. We are appealing to you to support us in this noble cause by donating generously. <br/><br/>
    </Text>
    <Text 
      fontSize={{ base: "24px", lg: "36px" }} 
      fontWeight={"medium"} width={{ lg: "583px" }} 
      my={{base:"8px", lg:"16px"}} color={"#FBFFC9"}>
      The Pivotal Steps
    </Text>
    <Text fontSize={{ base: "14px", lg: "24px" }}><strong>Structural Erection</strong> Reinforcing walls, roofing, and security.</Text><br/>
    <Text fontSize={{ base: "14px", lg: "24px" }}><strong>Essential Utilities</strong> Wiring and Plumbing.</Text><br/>
    <Text fontSize={{ base: "14px", lg: "24px" }}><strong>Transformation</strong>Turning a shell into a sanctuary for the Ummah.</Text><br/>
        <Text fontSize={{ base: "14px", lg: "24px" }}>By contributing to this project, you are literally laying the foundation for a laudable legacy, stability, protection, and eternal sadaqatun jaariyah bi awnillah because at this stage, every contribution is not just money.
        It is protection.
        It is stability.
        It is the final step toward turning years of effort into a lasting legacy.</Text><br/><br/>

    <Link href="/donate">
      <Buttons width={{ base: "full", md: "auto", display: "block"}} text="Donate Now" colorScheme="#008B37" variant="solid" bg="#008B37" />
    </Link>
  </Box>
  
  </>
);

