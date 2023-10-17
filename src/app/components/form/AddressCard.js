import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Link
} from "@chakra-ui/react";

export const PersonalInfoCard = () => {

  const requirements = [
    {
      id: 1,
      title: 'Age',
      desc: "Students must be at least 14 years old, ensuring a conducive learning environment for mature and focused learners."
    },
    {
      id: 2,
      title: 'Smart Phone',
      desc: "To facilitate effective learning, students should have access to a smart phone for accessing our online resources and materials."
    },
    {
      id: 3,
      title: 'Required Dictionary',
      desc: 'For students below the Thanawiyyah level, we recommend the use of the "Verbace Dictionary" to enhance your learning experience.'
    },
  ]

  return (
    <Box position={'relative'} top={"-230px"}>
      <Text fontSize={{base:"24px", md:"32px"}} fontWeight={500}>Enrolment Requirements</Text>
      <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(3, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}}>
        {
          requirements.map((item) => (
            <GridItem key={item.id} h={{base:"210px", md:"322px", lg:"300px", xl:"352px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} py={{base:"20px", md:"40px"}}>
              <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>{item.title}</Text>
              <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={6}>{item.desc}</Text>
            </GridItem>
          ))
        }
      </Grid>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"50px"} _hover={"none"}>
        <Text fontSize={"20px"} textAlign={"center"} fontWeight={"500"}>Ready to Start Your Journey?</Text>
          <Link colorScheme="#002A11" variant="solid" bg="#002A11" w="333px" color={"#FEFFF4"} mt={"16px"} href="https://docs.google.com/forms/d/e/1FAIpQLSfca9VFLwu-_wkrbejQCCjEtln9EqsTnDxf2kZ8DcAEWxLLUA/viewform?usp=sf_link" py="12px" textAlign={"center"} rounded={"12px"} isExternal>Click here</Link>
      </Box>
    </Box>
  )
};
