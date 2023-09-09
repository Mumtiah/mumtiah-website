import { Container, Text} from "@chakra-ui/react"
import Buttons from "../button/Buttons"

const Community = ({headText,subText}) => {
    return(
        <Container bg='#80E7A9' maxW='container.max' textAlign='center' p={10}>
            <Text color='#002A11' fontSize='40px' fontWeight='500px' mb='6'>{headText}</Text>
            <Text color='#002A11' fontSize='24px' fontWeight='400px' mb='8'>{subText}</Text>
            <Buttons text="Join Our Community" colorScheme="#008B37" variant="solid" bg="#008B37"/>
        </Container>
    )
}


export default Community