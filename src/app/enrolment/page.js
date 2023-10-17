"use client";
import { Divider, Box } from "@chakra-ui/react";
import { EnrolmentForm } from "../components/form/EnrolmentForm";
import { PersonalInfoCard } from "../components/form/AddressCard";
import Hero from "../components/form/Hero";

export default function Enrolment() {
  return (
    <>
      <Hero />
      <Divider />
      <Box bg="#CCF6DD" px={{ base: "20px", md: "70px", xl: "150px" }} h={{base:"1850px", md:"2900px", lg:"1550px"}} py="30px">
        <EnrolmentForm />
        <PersonalInfoCard />
      </Box>
    </>
  );
}
