import {
  Text,
  Button,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { ToggleButton } from "./ToggleButton";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{
          base: "inline-flex",
          lg: "none",
        }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent bg="#FEFFED" h={"100vh"} w="100vw">
          <DrawerHeader>
            <HStack>
              <ToggleButton
                isOpen={isOpen}
                onClick={onToggle}
                aria-label="Open menu"
              >
                Menu
              </ToggleButton>
              <CloseIcon />
            </HStack>
          </DrawerHeader>

          <DrawerBody mt="72px" p="4">
            <Stack spacing="4">
              <Link href="/">
                <Text fontSize="14px" fontWeight="400">
                  Homepage
                </Text>
              </Link>
              <Link href="/programs">
                <Text fontSize="14px" fontWeight="400">
                  Our Program
                </Text>
              </Link>
              <Link href="/enrolment">
                <Text fontSize="14px" fontWeight="400">
                  Enroll
                </Text>
              </Link>
              <Link href="/donate">
                <Text fontSize="14px" fontWeight="400">
                  Donate
                </Text>
              </Link>
              <Link href="/alumni">
                <Text fontSize="14px" fontWeight="400">
                  Alumni
                </Text>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
