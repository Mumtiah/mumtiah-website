import { Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import Buttons from "../button/Buttons"

const Ourprograms = () => {

    const programs = [
        {
            id:"1",
            mainText : "Physical Class",
            subText : "We teach based on what Allah and his prophet commanded."
        },
        {
            id:"2",
            mainText : "Online Class",
            subText : "We teach based on what Allah and his prophet commanded."
        },
        {
            id:"3",
            mainText : "Free online class",
            subText : "We teach based on what Allah and his prophet commanded."
        },
        {
            id:"4",
            mainText : "Community",
            subText : "We teach based on what Allah and his prophet commanded."
        },
        {
            id:"5",
            mainText : "Ramadan Lecture",
            subText : "We teach based on what Allah and his prophet commanded."
        },
        {
            id:"6",
            mainText : "Mumtiah Experience",
            subText : "We teach based on what Allah and his prophet commanded."
        },
    ]

    return(
        <Container backgroundColor='#002A11' maxW='container.max' px={{base:4, lg:"100px"}} py={{base:"40px", lg:"90px"}}>
            <Text color='#FCFFDB' fontSize='14px' fontWeight='700px' as='b' mb='2'>Our Program </Text>
            <Text color='#FCFFDB' fontSize='32px' fontWeight='500px'mb='2'>Our Program</Text>
            <Text color='#FCFFDB' fontSize='20px' fontWeight='600px' mb="4">We teach based on what Allah and his prophet commanded.</Text>

            <SimpleGrid columns={[1, null, 2]} spacing={{base:4, lg:10}} mb={6}>
                {
                    programs.map((program, i) => (
                        <Box key={program.id} bg='#80E7A9' p={{ base:"10px", lg:"32px"}} height={{base:"120px", lg:"240px"}} borderRadius={5}>
                            <Text color='#002A11' fontSize={{ base:"14px", lg:"40px"}} mb="10px" fontWeight='700px'as='b' >{program.mainText}</Text>
                            <Text color='#002A11' fontSize={{ base:"14px", lg:"24px"}} fontWeight='400px'>{program.subText}</Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
            <Buttons text="Our Program" colorScheme="#008B37" variant="solid" bg="#008B37"/>
        </Container>
    )
}



export default Ourprograms