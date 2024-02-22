"use client";
import { Box ,Text, Image, Grid, GridItem,Center} from "@chakra-ui/react";
import { SearchBar } from "../components/SearchBar/SearchBar";


export default function Alumni(){


    const informations= [
        {
            "id": 1,
            "Timestamp": "1/16/2024 6:59:31",
            "Name": "Oshuniran sheriff ola ",
            "Level": "Idaadi",
            "Yearofgraduation": "2020",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1payd0F1g8200s1Bu4-vPkKbtpoWmFtLw",
            "Testimony": "Alhamdulillah "
        },
        {
            "id": 2,
            "Timestamp": "1/16/2024 7:01:59",
            "Name": "Oladimeji Muaz ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "LASUCOM",
            "Passport": "https://drive.google.com/open?id=1b-uVohXYQ5qnqg0YvVID98ANrZPEtHvj",
            "Testimony": "The passion, dedication and consistency of the Asaatidh is second to none."
        },
        {
            "id": 3,
            "Timestamp": "1/16/2024 7:02:06",
            "Name": "محمد الأول ماكوشوتى ",
            "Level": "Idaadi",
            "Yearofgraduation": "2022",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "كيفية التدريس ممتعة 😍😊"
        },
        {
            "id": 4,
            "Timestamp": "1/16/2024 7:04:58",
            "Name": "محمد الأول ماكوشوتى ",
            "Level": "Idaadi",
            "Yearofgraduation": "2021",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "كيفية التدريس ممتعة و تثبيت العلم ممتع"
        },
        {
            "id": 5,
            "Timestamp": "1/16/2024 7:18:40",
            "Name": "Makinde Fawwaz ",
            "Level": "Ibtidaah 3",
            "Yearofgraduation": "2023",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "So many things: the classes, the various religious program making sure that we learn the sound Islam and practice it, the interaction and others."
        },
        {
            "id": 6,
            "Timestamp": "1/16/2024 7:28:39",
            "Name": "Salaudeen Mustapha Oluwabusayo",
            "Level": "Idaadi",
            "Yearofgraduation": "2020",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1zN-v8EgTz8d0p53CvzaiLbfCjIKgwOGL",
            "Testimony": "The flexibility of classes and the concise syllabus"
        },
        {
            "id": 7,
            "Timestamp": "1/16/2024 8:18:53",
            "Name": "Isu Momodu Muhammad ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1gFlsn8wtrHZKCokWTBn7URyy5U9MpvGc",
            "Testimony": "The teachers(especially the mudeer) main objective is for the students to gain knowledge and be  spiritually uplifted "
        },
        {
            "id": 8,
            "Timestamp": "1/16/2024 8:23:21",
            "Name": "Isu Momodu Muhammad ",
            "Level": "Ibtidaah 3",
            "Yearofgraduation": "2021",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1ajyvJ_RvPb3NYbIPxw-oZadWCq1gLrGt",
            "Testimony": "Impact comes first in mumtiah. The teachers are ready to impact in the students and they love when there's improvement. They aren't happy when the student's progress is slow at a point. We the students get to see this on their faces. May Allah bless all our asaatidha(teachers).Amin"
        },
        {
            "id": 9,
            "Timestamp": "1/16/2024 9:06:34",
            "Name": "Aminat Ibidolapo Idowu",
            "Level": "Thanaawiy",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Madrasatul Mumtiah is an institute where you don't just learn how to read and interpret the Qur'an and other sciences but you also learn how to understand the Word of Allah, implement it in one's life and what it means to be a true Muslim. "
        },
        {
            "id": 10,
            "Timestamp": "1/16/2024 9:06:55",
            "Name": "Toyyibah Muslim ",
            "Level": "Idaadi",
            "Yearofgraduation": "2016",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Madrasatul Mumti'ah is a madrasah who uses modern teaching techniques and simplified syllabus to train her students to achieve their 'arabiyyah goals."
        },
        {
            "id": 11,
            "Timestamp": "1/16/2024 9:18:47",
            "Name": "Mariam AbdulFattah ",
            "Level": "Idaadi",
            "Yearofgraduation": "2019",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": ""
        },
        {
            "id": 12,
            "Timestamp": "1/16/2024 9:23:21",
            "Name": "IS-HAQ MUSAB ONAOPEMIPO ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1chMxzKV5acVT-hr0ijnITzbzkuWB3Jzm",
            "Testimony": "Mumtiah gave me a sense of brotherhood and a family ready to help me with my Deen."
        },
        {
            "id": 13,
            "Timestamp": "1/16/2024 9:44:36",
            "Name": "Okesola Fatiha Abisola ",
            "Level": "Idaadi",
            "Yearofgraduation": "2019",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=1k3nhYXAJLxuXWs5o-MITQUmgjyHMejGY",
            "Testimony": "\"Mumtiah for me, was, \"\"a right place at the right time\"\" situation.The duration of each class ensures that you can finish them in a short while while learning all you need to learn. You also get to grow your Iman cos you'll definitely be in the company of righteous people. \""
        },
        {
            "id": 14,
            "Timestamp": "1/16/2024 11:05:16",
            "Name": "Suara Taofeeqoh ",
            "Level": "Ibtidaah 3",
            "Yearofgraduation": "2023",
            "Branch": "Bariga",
            "Passport": "https://drive.google.com/open?id=19iN2Jq45gtuVdpVlPz8_wphqyLFUf04O",
            "Testimony": "My experience in Mumtiah so far has been a life changing one.I started as someone who could barely read the Quran but I can comfortably read the Quran and some other Arabic text.I love the way the exam and test was strict because it made me study honestly and wanted to do more. The lectures are what I enjoyed the most.The Ramadan Lectures was something, I didn't like missing because there was so much to learn about Islam and each lecturer does proper justice to what topic they are talking about.Lastly, the teachers are strict but ready to do their best to make sure you understand.I would implore anyone who honestly wants to know and learn about Islam to join Mumtiah."
        },
        {
            "id": 15,
            "Timestamp": "1/17/2024 7:26:09",
            "Name": "Abdulqoyum Aliyu",
            "Level": "Thanaawiy",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": ""
        },
        {
            "id": 16,
            "Timestamp": "1/17/2024 7:35:44",
            "Name": "Kaffo zulaykha Ayodeji ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": ""
        },
        {
            "id": 17,
            "Timestamp": "1/17/2024 18:29:03",
            "Name": "Sumayah Olawunmi Abdulkareem ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "LASUCOM",
            "Passport": "",
            "Testimony": "I did not leave Lasucom the way I started. It was a big journey trying to get a madrasah close to my school but I didn't get one until Mumtiah structured a branch in Lasucom. Mumtiah made i'daadiy simple and easy for me, they built strategies that help students understand better and learn faster. I love the fact that most of their teachers are students who graduated from the same Mumtiah because it helps continue the trend of teaching.Thank you so much Mumtiah, I can't appreciate you less. "
        },
        {
            "id": 18,
            "Timestamp": "1/17/2024 19:26:03",
            "Name": "Wakilat Adesanya ",
            "Level": "Idaadi",
            "Yearofgraduation": "2019",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Mumtiah is actually a very wonderful and homely place to be. There’s no pressure and you are taught according to the syllabus of a standard Modrasa. A person should join Mumtiah if they’re seeking for that long lasting experience and they need a family in a school"
        },
        {
            "id": 19,
            "Timestamp": "1/19/2024 9:57:49",
            "Name": "Abdulqoyum Aliyu",
            "Level": "Idaadi",
            "Yearofgraduation": "2019",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": ""
        },
        {
            "id": 20,
            "Timestamp": "1/19/2024 10:04:18",
            "Name": "Akande Ridwanullah",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "The madrasah has very good and sound teachers in a good space that promotes effective teaching and learning amongst students"
        },
        {
            "id": 21,
            "Timestamp": "1/19/2024 10:48:07",
            "Name": "Muhammad Salahu Bello",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Mumtiah really helps my life, spiritually and academically"
        },
        {
            "id": 22,
            "Timestamp": "1/19/2024 11:31:41",
            "Name": "Akeem Matilukuro Ajao ",
            "Level": "Idaadi",
            "Yearofgraduation": "2021",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Running academics simultaneously with madrasah "
        },
        {
            "id": 23,
            "Timestamp": "1/19/2024 22:15:09",
            "Name": "Faatimah Olanrewaju",
            "Level": "Thanaawiy",
            "Yearofgraduation": "2021",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Great Islamic school with a friendly, passionate founder! They use an effective method to teach Arabic and other Islamic sciences. I have attended other schools since I graduated from Mumtiah, but I continue to cherish memories of the times I spent there."
        },
        {
            "id": 24,
            "Timestamp": "1/20/2024 14:00:14",
            "Name": "Raheem AbdulFatai ",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "Bariga",
            "Passport": "",
            "Testimony": "Alhamdulillah "
        },
        {
            "id": 25,
            "Timestamp": "1/20/2024 14:00:16",
            "Name": "Abideen Muhammed",
            "Level": "Idaadi",
            "Yearofgraduation": "2024",
            "Branch": "LASUCOM",
            "Passport": "https://drive.google.com/file/d/1Cev8u-3MafTqN3JqGialWkiVNKHOk5u3/view?usp=sharing",
            "Testimony": "Alhamdulillah "
        }
    ]

    return(
      
        <Box px={{ base: "16px", lg: "100px" }} pb={{ base: "40px", lg: "120px" }} pt={{ base: "40px", lg: "80px" }} bg={"#FDFFE4"} >
            <SearchBar/>
            <Grid templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}} gap="32px" w="full" mt={{base:"24px", md:"48px"}}>
                {
                informations.map((information) => (
                    <GridItem key={information.id} h={{base:"329px", md:"380px", lg:"421px",}} border="1px" borderColor={"#002A11"} rounded={"15px"} px={"20px"} py={{base:"20px", md:"40px"}} bgGradient='linear(to-b, #FBFFC9, #FBFED9)'>
                        <Center><Image 
                            src={"/images/blankprofile.svg"}
                            w={{base:'120px', lg:'140px'}} h={{base:'120px', lg:'140px'}}
                            borderRadius='full'
                            
                        /></Center>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} fontWeight={"500"} mt={6}>Name: {information.Name}</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} fontWeight={"500"} mt={2}>Year: {information.Yearofgraduation}</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} fontWeight={"500"} mt={2}>Level: {information.Level}</Text>
                        <Text color={"#002A11"} fontSize={{base:"16px", md:"24px", lg:"18px", xl:"24px"}} fontWeight={"500"} mt={2}>Name: {information.Branch}</Text>
                    </GridItem>
                ))
                }
            </Grid>
        </Box>
        
       
    )
}