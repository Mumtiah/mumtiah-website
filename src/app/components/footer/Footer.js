import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Divider,
  Box,
  SimpleGrid
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";


export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    bg='#002A11'
    maxW="container.max"
    py={{ base: "40px", lg: "120px" }}
    px={{ base: "16px", lg: "100px" }} 
    
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
      
    >
        <Image src="/mumtiahLogo.svg" w='40.69px' h='45px'></Image>
        <SimpleGrid columns={{ base:"1", md:"3"}} spacing={1}>
          <Box w="300px">
            <Text color='#FCFFD2' as="b" fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >Head Quarter:</Text>
            <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>10 adesina street, ladi-lak, Bariga Lagos. </Text>
          </Box>
          <Box w="300px">
            <Text color='#FCFFD2' as="b" fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >LASUCOM Branch:</Text>
            <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>LASUCOM Central Mosque, Ikeja, Lagos </Text>
          </Box>
          <Box w="300px">
            <Text color='#FCFFD2' as="b" fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >LUTH Branch:</Text>
            <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>Righteous Kiddies School 7, Apesin street, beside Luth Gate, Mushin.</Text>
          </Box>
        </SimpleGrid>
        
        <Divider orientation='horizontal'/>
        <Text color='white' fontSize='14px' fontWeight='400px' textAlign='center'>Copyright 2023, All Right Reserved</Text>
        <ButtonGroup variant="tertiary" color='white' mx='auto'>
          <IconButton
            as="a"
            href="https://www.facebook.com/AlMadrasatulMumtiah"
            aria-label="Facebook"
            icon={<FaFacebook />}
          />
          <IconButton as="a" href="https://twitter.com/i/flow/login?redirect_after_login=%2FMumtiahMadrasa" 
            aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton
            as="a"
            href="https://www.instagram.com/madrasatulmumtiah/?igshid=MmU2YjMzNjRlOQ%3D%3D"
            aria-label="Instagram"
            icon={<FaInstagram />}
          />
        </ButtonGroup>
        <Divider orientation='horizontal' color='white' />

        
      </Stack>
  </Container>
);
