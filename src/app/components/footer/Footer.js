import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
  Divider
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";


export const Footer = () => (
  <Container
    as="footer"
    role="contentinfo"
    bg='#002A11'
    maxW="container.max"
    p={12}
    // py={{
    //   base: "12",
    //   md: "16",
    // }}
    
  >
    <Stack
      spacing={{
        base: "4",
        md: "5",
      }}
    >
        <Image src="/mumtiahLogo.svg" w='40.69px' h='45px'></Image>
        <Text color='white' fontSize='16px' fontWeight='400px' >Annex:</Text>
        <Text color='white' fontSize='16px' fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>

        <Text color='white' fontSize='16px' fontWeight='400px'>Branch:</Text>
        <Text color='white' fontSize='16px' fontWeight='400px' noOfLines={{base:'2', md:'3'}} mb={4}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>

        <Text color='white' fontSize='16px' fontWeight='400px' >Branch:</Text>
      <Text color='white' fontSize='16px' fontWeight='400px'  noOfLines={[1,2,3]} mb={4}>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>

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
      {/* <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights
        reserved.
      </Text> */}
  </Container>
);
