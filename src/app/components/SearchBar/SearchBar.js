import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <>
      <InputGroup borderRadius={5} size="md">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #000000"/>
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="md" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494" bg={"#002A11"} textColor={"white"}>
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};