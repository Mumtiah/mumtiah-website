"use client";
import { Container, Text, Box, Image, Grid, GridItem, Button, useControllableState} from "@chakra-ui/react"
import { useState } from "react";

export default function classes () {
        const [openTab, setOpenTab] = useControllableState({ defaultValue: 1 })

    return(
        <>
            <Container bg="white" maxW='container.max' textAlign='' px={{ base: "16px", lg: "100px" }} py={{ base: "40px", lg: "50px" }}>
                <Text color='#002A11' fontSize={{ base:"14px", lg:"40px"}} my="10" fontWeight='700px'as='b'>Mumtiah classes</Text>

                <Text fontWeight="400px" fontSize="24px" mt='10' textColor={"#002A11"}>Al Madrasatul Mumtiah has evolved over the few years of existence on methods and styles of teaching and mode of disseminating classes according to the levels of students.</Text>
                
                <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}} gap={6} w="full" mt={{base:"24px", md:"60px"}}>
                    <GridItem w='100%' h='12' pt="2" border="1px" borderColor={"#002A11"} rounded={"15px"} cursor={"pointer"} bg={openTab === 1 ? "#008B37" : ""} onClick={() => setOpenTab(1)}>
                        <Text textColor={openTab=== 1 ? "#FCFFD2" : "#00451C"} fontSize={{base:"14px", md:"20px"}} fontWeight={"700"} textAlign={"center"} >Head Quarter </Text>
                    </GridItem>
                    <GridItem w='100%' h='12' pt="2" border="1px" borderColor={"#002A11"} rounded={"15px"} cursor={"pointer"} bg={openTab === 2 ? "#008B37" : ""} onClick={() => setOpenTab(2)}>
                        <Text textColor={openTab=== 2 ? "#FCFFD2" : "#00451C"} fontSize={{base:"14px", md:"20px"}} fontWeight={"700"} textAlign={"center"}>LASUCOM Branch</Text>
                    </GridItem>
                    <GridItem w='100%' h='12' pt="2" border="1px" borderColor={"#002A11"} rounded={"15px"} cursor={"pointer"} bg={openTab === 3 ? "#008B37" : ""} onClick={() => setOpenTab(3)}>
                        <Text textColor={openTab=== 3 ? "#FCFFD2" : "#00451C"} fontSize={{base:"14px", md:"20px"}} fontWeight={"700"} textAlign={"center"}>LUTH Branch</Text> 
                    </GridItem>
                    <GridItem w='100%' h='12' pt="2" border="1px" borderColor={"#002A11"} rounded={"15px"} cursor={"pointer"} bg={openTab === 4 ? "#008B37" : ""} onClick={() => setOpenTab(4)}>
                        <Text textColor={openTab=== 4 ? "#FCFFD2" : "#00451C"} fontSize={{base:"14px", md:"20px"}} fontWeight={"700"} textAlign={"center"}>Online</Text>
                    </GridItem>
                </Grid>

               {
                openTab === 1 ?       
                    <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}} >
                    
                        <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}}border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                            <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Address</Text>
                            <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                                10 adesina street,<br/> 
                                lad-lak , Bariga <br/> 
                                Lagos. <br/> 
                            </Text>
                        </GridItem>

                        <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                            <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Classes</Text>
                            <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>Thanawiyy class <br/> 
                                Idaadiy class <br/> 
                                Ibtidaai class I<br/> 
                                Ibtidaai class II<br/>
                                Ibtidaai class III<br/>
                                Tahfeez classes
                            </Text>
                        </GridItem>

                    </Grid>
                :
                openTab === 2 ?
                    <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}} >
                    
                        <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}}border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                            <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Address</Text>
                            <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                                 LASUCOM Central Mosque, <br/> 
                                 LASUTH, Ikeja,<br/> 
                                 Lagos
                            </Text>
                        </GridItem>

                        <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                            <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Classes</Text>
                            <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                                Idaadiy class <br/> 
                                Ibtidaai class I<br/> 
                                Ibtidaai class II<br/>
                                Ibtidaai class III<br/>
                            </Text>
                        </GridItem>

                
                    </Grid>
                :
                openTab === 3 ?
                <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}} >
                
                    <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}}border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                        <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Address</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                            Righteous Kiddies School <br/> 
                            7, Apesin street, beside Luth Gate,<br/> 
                            Mushin, Lagos. <br/> 
                        </Text>
                    </GridItem>

                    <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                        <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Classes</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                            Idaadiy class <br/> 
                            Ibtidaai class I<br/> 
                            Ibtidaai class II<br/>
                            Ibtidaai class III<br/>
                        </Text>
                    </GridItem>

                </Grid>

                :
                <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}} >
                
                    <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}}border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                        <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Address</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>
                            Telegram,<br/>
                            Whatsapp,<br/>
                            Zoom, <br/>
                            Google meet
                        </Text>
                    </GridItem>

                    <GridItem bg={"#CCF6DD"} h={{base:"200px", md:"240px", lg:"280px", xl:"320px"}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} p={{base:"16px", md:"40px"}}>
                        <Text color={"#002A11"} fontSize={{base:"14px", md:"20px"}} fontWeight={"600"}>Classes</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} mt={3}>Thanawiyy classes <br/>
                            Idaadiy class I<br/> 
                            Idaadiy class II<br/> 
                            Ibtidaai class I<br/> 
                            Ibtidaai class II<br/>
                            Ibtidaai class III<br/>
                        </Text>
                    </GridItem>
                </Grid>

}
            </Container>
            <Box bg={"#FDFFE4"} width="full" px={{base:"16px", lg:"100px", xl:"100px"}}  color={"#002A11"} py={{base:"40px", lg:"64px"}}>
                    <Text fontSize={{base:"20px", lg:"48px"}} fontWeight={"semibold"}>Mumtiah Modrasah</Text>
                    <Text fontSize={{base:"14px", lg:"24px"}} width={{lg:"883px"}} mb={"24px"}>Embark on a journey of growth and learning by enrolling in our school's website. Discover a world of knowledge, interactive courses, and expert guidance that will help you reach your goals. Join our community of learners today and take the first step towards a brighter future!</Text>
                    <Button variant={"outline"} borderRadius={"12px"} px="40px" fontWeight={"semibold"} py="30px" colorScheme={"#002A11"}>Learn More</Button>
            </Box>
        </>
    )
}