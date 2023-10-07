import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Divider,
  Box
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
        <Image src="/images/mumtiah-logo.png" w='40.69px' h='45px'></Image>
        <Box w="210px">
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >Annex:</Text>
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>10 adesina street, ladi-lak, Bariga Lagos. </Text>
        </Box>
        <Box w="210px">
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >Annex:</Text>
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>Lasuth Central Mosque, Ikeja. </Text>
        </Box>
        <Box w="210px">
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' >Annex:</Text>
          <Text color='white' fontSize={{ base:"14px", md:"24px"}} fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>Righeous Kiddies School, 16, Apesin street, Mushin</Text>
        </Box>
        
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
