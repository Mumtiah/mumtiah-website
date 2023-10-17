import { Box, Text, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="#FDFFE4" w="full" h={{base: "750px", lg:"928px"}} borderBottom='4px' borderBottomColor={'black'}>
      <Center flexDirection="column" py={{base: "20px", md:68}} px={{base:"20px", md:50, lg:100}}>
        <Text fontSize={{lg:"36px"}} mb={3} fontWeight="700">
          Welcome to Mumtiah Madrasah
        </Text>

        <Text fontSize={{lg:"24px"}} fontWeight={"400"} fontStyle={"italic"} w="432px" textAlign={"center"}>
          Your path to Arabic Excellence
        </Text>

        <Box w="full" px={{base: "12px", md:"20px"}} py="32px" border="1px" borderColor={'black'} bg="#FEFFED" fontSize={{lg:"24px"}} textAlign={"center"} rounded="15px" mt="64px">
        Are you ready to embark on a transformative journey into the world of Arabic language and culture? At Mumtiah Madrasah, we are committed to providing a rich and immersive learning experience that goes beyond textbooks. Join us and become a part of our vibrant community dedicated to the pursuit of knowledge and linguistic mastery.
        </Box>
      </Center>
    </Box>
  );
};

export default Hero;
