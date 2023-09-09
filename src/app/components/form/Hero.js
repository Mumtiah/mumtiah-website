import { Box, Text, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="white" w="full" h={"260px"}>
      <Center flexDirection="column" py={68} px={100}>
        <Text fontSize="36px" mb={3} fontWeight="700">
          Join Us
        </Text>

        <Text fontSize="24px" fontWeight={"400"} w="432px" textAlign={"center"}>
          Kindly fill the form below with appropriate information.
        </Text>
      </Center>
    </Box>
  );
};

export default Hero;
