"use client";
import { Divider, Box } from "@chakra-ui/react";
import { EnrolmentForm } from "../components/form/EnrolmentForm";
import Hero from "../components/form/Hero";

export default function Enrolment() {
  return (
    <>
      <Hero />
      <Divider />
      <Box px={{ base: "20px", md: "150px" }} py="30px">
        <EnrolmentForm />
      </Box>
    </>
  );
}
