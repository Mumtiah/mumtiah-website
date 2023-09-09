import { Button } from '@chakra-ui/react'

const Buttons = ({colorScheme, variant, text, color, bg}) => {
    //variant should either be solid or outline
    return(
        <Button colorScheme={colorScheme} variant={variant} color={color} bg={bg}>{text}</Button>
    )
}

export default Buttons