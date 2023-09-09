import { Container, Text} from "@chakra-ui/react"
import Buttons from "../button/Buttons"

const Community = ({headText,subText}) => {
    return(
        <Container bg='#80E7A9' maxW='container.max' textAlign='center' px={{ base: "16px", lg: "100px" }} py={{ base: "40px", lg: "120px" }}>
            <Text color='#002A11' fontSize={{ base:"32px", md:"40px"}} fontWeight='500px' mb='6'>{headText}</Text>
            <Text color='#002A11' fontSize={{base:'14px', md:'24px'}}  width={{lg:"712px"}} mx="auto" fontWeight='400px' mb='8'>{subText}</Text>
            <Buttons text="Join Our Community" colorScheme="#008B37" variant="solid" width={{ base: "full", md: "auto" }} bg="#008B37"/>
        </Container>
    )
}


export default Community