import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { PersonalInfoCard } from "./AddressCard";

export const EnrolmentForm = () => {
  const reasons = [
    {
      id: 1,
      title: 'Comprehensive Arabic Curriculum',
      desc: 'Our curriculum is meticulously crafted to cover all aspects of the Arabic language, from grammar and vocabulary to literature and conversation.'
    },
    {
      id: 2,
      title: 'Supportive Community',
      desc: "When you enroll at Mumtiah Madrasah, you don't just gain access to courses; you become a valued member of a supportive and inspiring community."
    },
    {
      id: 3,
      title: 'Cultural Immersion',
      desc: "Immerse yourself in the rich tapestry of Arabic culture, history, and tradition."
    },
    {
      id: 4,
      title: 'Expert Instructors',
      desc: "Learn from experienced Arabic language educators who are dedicated to your success."
    }
  ]
  
  return (
  <Box bg="#FEFFF4" position="relative" top="-300px" borderTop="2px" borderTopColor={"#AAEFC6"} rounded={'30px'} px={{base: "20px", xl:"85px"}} py={{base:"20px", md:"79px"}}>
    <Text w={{base: "250px", lg:"674px"}} color={"#333333"} mx={"auto"} fontSize={{base: "24px", md:"40px", lg:"64px"}} fontWeight={"700"} textAlign={"center"}>Why Choose Mumtiah Madrasah?</Text>
    <Grid templateColumns={{base: '1', lg:'repeat(2, 1fr)'}} gap="32px" w="full" mt={{base:"30px", md:"66px"}}>
      {
        reasons.map((item) => (
          <GridItem key={item.id} h={{base:"210px", md:"322px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} py={{base:"20px", md:"40px"}}>
            <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>{item.title}</Text>
            <Text color={"#002A11"} fontSize={{base:"16px", md:"24px"}} mt={6}>{item.desc}</Text>
          </GridItem>
        ))
      }
    </Grid>
    
  </Box>
)
}

