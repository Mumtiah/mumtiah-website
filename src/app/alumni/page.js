"use client";
import { Box ,VStack, Heading, Text, Card, CardBody, CardFooter, Image, SimpleGrid, Stack} from "@chakra-ui/react";
export default function Alumni(){

    const images =[
        {
            "id":1,
            "img":"/images/mumtiaImages/one.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":2,
            "img":"/images/mumtiaImages/two.jpg",
            "title":"study group"
        },

        {
            "id":3,
            "img":"/images/mumtiaImages/three.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":4,
            "img":"/images/mumtiaImages/four.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":5,
            "img":"/images/mumtiaImages/five.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":6,
            "img":"/images/mumtiaImages/six.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":7,
            "img":"/images/mumtiaImages/seven.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":8,
            "img":"/images/mumtiaImages/eight.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":9,
            "img":"/images/mumtiaImages/nine.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":10,
            "img":"/images/mumtiaImages/ten.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":11,
            "img":"/images/mumtiaImages/eleven.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":12,
            "img":"/images/mumtiaImages/twelve.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":13,
            "img":"/images/mumtiaImages/thirteen.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":14,
            "img":"/images/mumtiaImages/fourteen.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":15,
            "img":"/images/mumtiaImages/fifteen.jpg",
            "title":"Nahwul wahdi"
        },

        {
            "id":16,
            "img":"/images/mumtiaImages/sixteen.jpg",
            "title":"Nahwul wahdi"
        }
    ]

    return(
      
        <Box px={{ base: "16px", lg: "100px" }} py={{ base: "40px", lg: "120px" }} >
            <Stack spacing={{base:'25px', lg:'50px'}} > 
                <VStack w={{base:'300px', lg:"500px"  }} alignItems="start" spacing={{sm:'10px', lg:'25px'}}  >
                    <Heading fontSize={{sm:'15px',md:'24px', lg:'36px'}} >Our Alumni</Heading>
                    <Text fontSize={{base:"14px", lg:"24px"}}    >We teach based on what Allah and his prophet commanded.</Text>
                </VStack>
                <Stack spacing={{base:'20px', lg:'35px'}} >
                    <Heading fontWeight={700} fontSize={{sm:'15px', md:'24px', lg:'36px'}}>Thaanawiyyah</Heading>
                    <Box display='flex' flexDirection='column' gap={{base:'24px', lg:'32px'}}>
                        <Text fontSize={{base:"10px", lg:"24px"}}  >Class of 2021</Text>
                        <SimpleGrid spacing={{base:'25px', lg:'50px'}} minChildWidth={{base:'130px', lg:'280px'}}>
                            {images.map(image=>
                                <Box key={image.id}  mx={'auto'} w={'fit-content'}>
                                    <Box textAlign='center'
                                        border={'8px'}
                                        borderRadius={'full'}
                                        borderColor={'#55E08C'}>
                                        <Image 
                                        src={image.img}
                                        w={{base:'120px', lg:'270px'}} h={{base:'120px', lg:'270px'}}
                                        borderRadius='full'
                                        objectFit={'cover'}
                                         />
                                    </Box>
                                    <Text fontSize={{base:"14px", lg:"32px"}}  fontWeight='500px' textAlign={'center'}>{image.title}</Text>
                                </Box>

                            )}
                            
                        </SimpleGrid>
                    </Box>
                </Stack>
            </Stack>
        </Box>
        
       
    )
}