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

// Refactor repetitive menu items into a functional component
const MenuItem = ({ href, name }) => (
  <Link href={href}>
    <Text fontSize="16px" padding="10px" height={"43px"} fontWeight="400">
      {name}
    </Text>
  </Link>
);

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const menuItems = [
    { name: "Homepage", href: "/" },
    { name: "Our Program", href: "/programs" },
    { name: "Enroll", href: "/enrolment" },
    { name: "Donate", href: "/donate" },
    { name: "Alumni", href: "/alumni" },
    { name: "Data hub", href: "/datahub" }
  ];

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
        <DrawerContent bg="#FDFFE4" h={"100vh"} w="100vw">
          <DrawerHeader
            padding={"30px 16px 40px"}
            borderBottom={"1px solid #000"}
          >
            <HStack justifyContent="space-between">
              <ToggleButton
                isOpen={isOpen}
                onClick={onToggle}
                aria-label="Open menu"
              />
              <CloseIcon onClick={onToggle} />
            </HStack>
          </DrawerHeader>

          <DrawerBody mt="52px" p="4">
            <Stack spacing="10px">
              {menuItems.map((item, index) => (
                <MenuItem key={index} href={item.href} onClose={onClose} name={item.name} />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
