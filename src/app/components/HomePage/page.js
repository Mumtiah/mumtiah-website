'use client';
import { Container, Text, Box, SimpleGrid } from "@chakra-ui/react"
import Community from "../homepageComponents/community"
import Ourprograms from "../homepageComponents/Ourprograms";
import Buttons  from "../button/Buttons"

const OurPrograms = () => {

    
    return(
        <>
           <Ourprograms />

            <Community headText="Join Our Community" subText="Ready to embark on a transformative learning journey? Enroll now at our school website and gain access to a wealth of knowledge, expert guidance, and a vibrant community of learners. Your future awaits – take the first step today!"/>
        </>
    )
}



export default OurPrograms