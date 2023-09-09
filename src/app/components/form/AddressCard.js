import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export const PersonalInfoCard = (props) => (
  <Box
    as="form"
    bg="bg.surface"
    boxShadow="sm"
    borderRadius="lg"
    width={"full"}
    {...props}
  >
    <Stack
      spacing="5"
      px={{
        base: "4",
        md: "6",
      }}
      py={{
        base: "5",
        md: "6",
      }}
    >
      <Stack
        spacing="6"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <FormControl id="firstName" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            First Name
          </FormLabel>
          <Input bg={"#FEFFED"} h="63px" borderRadius={"12px"} />
        </FormControl>
        <FormControl id="lastName" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            Last Name
          </FormLabel>
          <Input bg={"#FEFFED"} h="63px" borderRadius={"12px"} />
        </FormControl>
      </Stack>

      <Stack
        spacing="6"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <FormControl id="address" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            Address
          </FormLabel>
          <Input bg={"#FEFFED"} h="63px" borderRadius={"12px"} />
        </FormControl>
        <FormControl id="state" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            State
          </FormLabel>
          <Input bg={"#FEFFED"} h="63px" borderRadius={"12px"} />
        </FormControl>
      </Stack>
      <Stack
        spacing="6"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <FormControl id="email" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            Email Address
          </FormLabel>
          <Input
            placeholder="xyz@gmail.com"
            bg={"#FEFFED"}
            h="63px"
            borderRadius={"12px"}
          />
        </FormControl>
        <FormControl id="phoneNumber" maxW={"600px"} h="102px">
          <FormLabel fontSize={"14px"} fontWeight="light">
            Phone Number
          </FormLabel>
          <Input
            bg={"#FEFFED"}
            h="63px"
            borderRadius={"12px"}
            placeholder="080000000"
          />
        </FormControl>
      </Stack>
    </Stack>

    <Flex
      py="4"
      px={{
        base: "4",
        md: "6",
      }}
    >
      <Button
        w={"333px"}
        color="white"
        bg={"#002A11"}
        _hover={{
          color: "white",
          bg: "black",
        }}
        type="submit"
      >
        Save
      </Button>
    </Flex>
  </Box>
);
