"use client";
import { Container, Text, Box, Image} from "@chakra-ui/react"
import Buttons from ".././components/button/Buttons"

export default function Datahub() {
    return(
        <>
            <Container bg="white" maxW='container.max' textAlign='' px={{ base: "16px", lg: "100px" }} py={{ base: "40px", lg: "50px" }}>
                <Text color='#002A11' fontSize={{ base:"14px", lg:"40px"}} m="4" fontWeight='700px'as='b'>Mumtiah Data Hub</Text>
                <Image width="100%" height="100%" src="/images/datahubimg.png" alt="Image Alt" mt="8"/><br/><br/>

                <Text fontWeight="400px" fontSize="24px">We gladly welcome you to the "Mumtiah Data Hub", the madrasah database platform for present and past students. This is to update our 
                    students' database and since you are one of our valued students, we want to keep in touch with you. Thanks, as you fill this form.</Text>

            </Container>
            <Box bg={"#FEFFED"} m={0} width="full" px={{base:"16px", lg:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"90px"}}>
                <Text fontSize={{base:"14px", lg:"24px"}}  mb={"24px"}>At Mumtiah, we are always ready to build a better community of "Mumtians", whether past or present and this is because YOU matter so much to us. <br/><br/>
                Our commitment to making ourselves better humans and in shaping a community solely based on sincere and genuine care is what birthed this system -  of collating adequate information about every single Mumtian. <br/><br/>
                Kindly assist in this data collation process by clicking on the link below and filling in your correct details.</Text>
                <Buttons text="click" bg="#00451C" colorScheme="#00451C" variant="solid" />
            </Box>
        </>
    )
}