'use client';
import { Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import Buttons  from "../button/Buttons"

const OurPrograms = () => {

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
        <>
            <Container backgroundColor='#002A11' maxW='container.max' p={12}>
                <Text color='white' fontSize='14px' fontWeight='700px' as='b' mb='2'>Our Program </Text>
                <Text color='white' fontSize='32px' fontWeight='500px'mb='2'>Our Program</Text>
                <Text color='white' fontSize='20px' fontWeight='600px' mb="4">We teach based on what Allah and his prophet commanded.</Text>

                <SimpleGrid columns={[1, null, 2]} spacing='40px' mb={6}>
                    {
                        programs.map((program, i) => (
                            <Box key={program.id} bg='#80E7A9' px={6} py={10} borderRadius={10}>
                                <Text color='#002A11' fontSize='28px' fontWeight='700px'as='b' >{program.mainText}</Text>
                                <Text color='#002A11' fontSize='20px' fontWeight='400px'>{program.subText}</Text>
                            </Box>
                        ))
                    }
                </SimpleGrid>
                <Buttons text="Our Program" color="white" colorScheme="#008B37" variant="outline" />
            </Container>

            <Container bg='#80E7A9' maxW='container.max' textAlign='center' p={10}>
                <Text color='#002A11' fontSize='40px' fontWeight='500px' mb='6'>Join Our Community</Text>
                <Text color='#002A11' fontSize='24px' fontWeight='400px' mb='8'>Ready to embark on a transformative learning journey? Enroll now at our school website and gain access to a wealth of knowledge, expert guidance, and a vibrant community of learners. Your future awaits – take the first step today!</Text>
                <Buttons text="Join Our Community" colorScheme="#008B37" variant="solid" bg="#008B37"/>
            </Container>
        </>
    )
}



export default OurPrograms