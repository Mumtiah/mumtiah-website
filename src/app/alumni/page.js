
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
            <Stack spacing={{sm:'25px', lg:'50px'}} > 
                <VStack w={{base:'300px', lg:"500px"  }} alignItems="start"  >
                    <Heading>Our Alumni</Heading>
                    <Text fontSize={{base:"14px", lg:"24px"}}    >We teach based on what Allah and his prophet commanded.</Text>
                </VStack>
                <Stack  >
                    <Heading>Thaanawiyyah</Heading>
                    <Box spacing={10}>
                        <Text fontSize={{base:"14px", lg:"24px"}} >Class of 2021</Text>
                        <SimpleGrid spacing='20px' minChildWidth='200px' >
                            {images.map(image=>(
                                <Card key={image.id} alignItems='center'>
                                <CardBody borderRadius={10}>
                                    <Image 
                                    src={image.img}
                                    w='200px' h='200px'
                                    borderRadius='full' />
                                </CardBody>
                                <CardFooter fontWeight='semibold' >{image.title}</CardFooter>
                            </Card>)

                            )}
                            
                        </SimpleGrid>
                    </Box>
                </Stack>
            </Stack>
        </Box>
        
       
    )
}