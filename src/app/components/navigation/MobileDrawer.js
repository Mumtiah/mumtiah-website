import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { ToggleButton } from "./ToggleButton";

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
        <DrawerContent bg="#FEFFED" h={"100vh"}>
          <DrawerHeader>
            <ToggleButton
              isOpen={isOpen}
              onClick={onToggle}
              aria-label="Open menu"
            />
          </DrawerHeader>

          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Link href="/programs">
                <Text fontSize="20px" fontWeight="600">
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
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
