"use client";
import React from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import Link from "next/link";
import { MobileDrawer } from "./MobileDrawer";

export const Navbar = () => {
  return (
    <Box as="section" h={{ base: "80px", lg: "150px" }} bg="#FDFFE4">
      <Box
        position="relative"
        px={{ base: "16px", lg: "100px" }}
        py={{ base: "10px" }}
        color={"#002A11"}
      >
        <Container py="4" width={"full"} maxW="full">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10" width={"100%"}>
              <HStack spacing="3" justifyContent={"space-between"} width="100%">
                <Logo />
                <MobileDrawer />
              </HStack>
            </HStack>
            <HStack
              w={{ lg: "784px" }}
              display={{
                base: "none",
                lg: "flex",
              }}
              gap="32px"
              justifyContent="space-between"
            >
              <Link href="/">
                <Text fontSize="20px" fontWeight="600" whiteSpace={"nowrap"}>
                  Home
                </Text>
              </Link>
              <Link href="/programs">
                <Text fontSize="20px" fontWeight="600" whiteSpace={"nowrap"}>
                  Our Program
                </Text>
              </Link>
              <Link href="/enrolment">
                <Text fontSize="20px" fontWeight="600">
                  Enroll
                </Text>
              </Link>
              <Link href="/donate">
                <Text fontSize="20px" fontWeight="600">
                  Donate
                </Text>
              </Link>
              <Link href="/alumni">
                <Text fontSize="20px" fontWeight="600">
                  Alumni
                </Text>
              </Link>
              <Link href="/datahub">
                <Text fontSize="20px" fontWeight="600" whiteSpace={"nowrap"}>
                  Data Hub
                </Text>
              </Link>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
