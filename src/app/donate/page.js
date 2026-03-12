"use client";
import { Container, Text, Box, Image, Link} from "@chakra-ui/react"
import Buttons from "../components/button/Buttons"

export default function Datahub() {
    return(
        <>
            <Container bg="#FDFFE4" maxW='container.max' textAlign='' px={{ base: "16px", lg: "100px" }} py={{ base: "40px", lg: "50px" }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                    <Text color='#002A11' width={'500px'} fontSize={{ base:"28px", lg:"40px"}} fontWeight='500'as='b'>Support Build Mumtiah Project</Text>
                    <Link href="https://dynaraise.com/build-mumtiah" isExternal colorScheme="#002A11" variant="solid" bg="#002A11" height={'fit-content'} width="170px" color={"#FEFFF4"} py="12px" px="16px" textAlign={"center"} rounded={"12px"}>Donate</Link>
                </Box>
                <Text fontWeight="400px" fontStyle={'italic'} fontSize={{base:"14px", lg:"24px"}} mt={'32px'} width={{base:'full', lg:'full'}}>Who is it that would loan Allah a godly loan except that He will multiply it for him... Q57v11
                <br/><br/>The Build Mumtiah Mosque project is budgeted at #250,000,000 and thus far, we have been able to acquire a property in Bariga, Lagos.</Text>

                {/* <Box m={0} width="full" color={"#002A11"} mt="50px">
                    <Text color='#002A11' width={'500px'} fontSize={{ base:"28px", lg:"40px"}} fontWeight='500'as='b'>Project Preview:</Text>
                    <Text color='#002A11' mt="20px" width={'500px'} fontSize={{ base:"24px"}} fontWeight='500'as='b' display={"block"}>Donation update</Text>
                    <Box width="full" height={"50px"} mt="50px" position={"relative"} border="1px" borderColor={"#00451C"} p="4px" bg={"#CCF6DD"} rounded={"full"}>
                        <Box width="300px" height={"44px"} position={"absolute"} top={"-48px"} left={"3px"} mt="50px" p="4px" bg={"#00451C"} rounded={"full"}></Box>
                    </Box>
                    <Box display={"flex"} width={"full"} justifyContent={"space-between"}>
                        <Box textAlign={"center"} color={"#002A11"}>
                            <Text w={"4px"} h={"32px"} mt={"16px"} mx={"auto"} bg={"#002A11"}></Text>
                            <Text fontSize={"18px"}>Raised</Text>
                            <Text fontSize={"20px"} fontWeight={"600"}>#6,000,000 & $300</Text>
                        </Box>
                        <Box textAlign={"center"} color={"#002A11"}>
                            <Text w={"4px"} h={"32px"} mt={"16px"} mx={"auto"} bg={"#002A11"}></Text>
                            <Text fontSize={"18px"}>Target</Text>
                            <Text fontSize={"20px"} fontWeight={"600"}>#52,000,000</Text>
                        </Box>
                    </Box>
                </Box> */}

                <Text fontSize={"32px"}  mt="50px" fontWeight={"500"}>Donate now</Text>
                <Box width={"full"}  mt="25px" bg="#CCF6DD" borderTop={"1px"} borderColor={"#002A11"} rounded={"8px"} py={"40px"} px={"6px"} color={"#002A11"}>
                    <Box width={"full"} display={{lg: "flex"}} justifyContent={"center"} gap={"127px"}>
                        <Box fontSize={{base: "24px", lg: "32px"}}>
                            <Text fontStyle={"italic"} fontWeight={"300"}>Naira Account</Text>
                            <Text fontWeight={"700"}>0654641304/gtbank</Text>
                            <Text fontWeight={"700"}>Mumtiah Madrasah</Text>
                        </Box>
                        <Box fontSize={{base: "24px", lg: "32px"}} mt={{base: "20px", lg: 0}}>
                            <Text fontStyle={"italic"} fontWeight={"300"}>Domiciliary Account</Text>
                            <Text fontWeight={"700"}>0740660543/gtbank</Text>
                            <Text fontWeight={"700"}>Mumtiah Madrasah</Text>
                        </Box>
                    </Box>
                    <Text mt={{base: "40px", lg: "80px"}} fontSize={{base: "24px", lg: "32px"}} width={"full"} textAlign={"center"} fontStyle={"italic"} fontWeight={"300"}>Or donate via 
                    <Link href="https://gofund.me/5333936f" isExternal colorScheme="#002A11" variant="solid" bg="#002A11" display={'inline'} height={'fit-content'} width="270px" mx="12px" mt="12px" color={"#FEFFF4"} py="12px" px="16px" textAlign={"center"} rounded={"12px"}>GoFundMe</Link>
                    </Text>
                </Box>
            </Container>
        </>
    )
}