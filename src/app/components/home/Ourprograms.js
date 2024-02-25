import { Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import Buttons from "../button/Buttons"
import Link from "next/link"

const Ourprograms = () => {

    const programs = [
        {
            id:"1",
            mainText : "Physical Class",
            subText : "Our physical classes hold accordingly in the following locations: Bariga, LASUCOM and LUTH."
        },
        {
            id:"2",
            mainText : "Online Class",
            subText : "We have flexible online classes for students from any part of the world with the right tools and medium. We got you covered even with your tight scheduled."
        },
        {
            id:"3",
            mainText : "Free online class",
            subText : "As an institution dedicated to Islamic dawah and the growth of the Muslim Ummah, Mumtiah Madrasah also offers free online classes on our telegram and YouTube channels."
        },
        {
            id:"4",
            mainText : "Community",
            subText : "Mumtiah Madrasah has built a community of excellence and religious and moral values where we keep learning and growing in knowledge of the Deen via telegram"
        },
        {
            id:"5",
            mainText : "Ramadan Lecture",
            subText : "Mumtiah Madrasah offers Ramadan lectures during the month of Ramadan. We deliver lectures on topics that have become necessary to be addressed in our communities. You can donate towards our Ramadan lectures program."
        },
        {
            id:"6",
            mainText : "Mumtiah Experience",
            subText : "Mumtiah Experience is when we have halal fun, games, networking, and of course, naseehah, nasheeds and recitation of the glorious Quran."
        },
    ]

    return(
        <Container backgroundColor='#002A11' maxW='container.max' px={{base:"16px", lg:"50px", xl:"100px"}} py={{base:"40px", lg:"90px"}}>
            
            <Text color='#FCFFDB' as="b" fontSize='36px' fontWeight='500px'mb={4}>Our Program</Text>
            <Text color='#FCFFDB' fontSize={{ base:"14px", lg:"20px"}}  fontWeight='600px' mb="4">As you must have guessed, Mumtiah Madrasah is an institution that has the best interest of her students at heart, hence, we have a number of programs crafter to accommodate everyone both home and abroad.<br/><br/>
            We have physical, online and hybrid classes according to individual schedules. We have one-on-one tutoring, weekend classes, night classes and virtual classes.</Text>

            <SimpleGrid columns={[1, null, 2]} spacing={{base:4, lg:10}} mb={6}>
                {
                    programs.map((program, i) => (
                        <Box key={program.id} bg='#80E7A9' p={{ base:"10px", lg:"32px"}} height={{base:"160px", lg:"390px"}} borderRadius={5}>
                            <Text color='#002A11' fontSize={{ base:"14px", lg:"40px"}} mb="10px" fontWeight='700px'as='b' >{program.mainText}</Text>
                            <Text color='#002A11' fontSize={{ base:"14px", lg:"24px"}} fontWeight='400px'>{program.subText}</Text>
                        </Box>
                    ))
                }
            </SimpleGrid>
            <Link href="/programs">
                <Buttons text="Our Program" colorScheme="#008B37" variant="solid" bg="#008B37"/>
            </Link>
        </Container>
    )
}



export default Ourprograms