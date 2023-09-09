import { Button } from '@chakra-ui/react'

const Buttons = ({colorScheme, variant, text, color, bg, width}) => {
    //variant should either be solid or outline
    return(
        <Button px="40px" width={width} fontWeight={"semibold"} py="30px" borderRadius={"12px"} colorScheme={colorScheme} variant={variant} color={color} bg={bg}>{text}</Button>
    )
}

export default Buttons