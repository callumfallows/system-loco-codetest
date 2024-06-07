import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const TextSearch = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        type="text"
        maxWidth="600px"
        placeholder="Search Devices"
        backgroundColor="gray.200"
      />
    </InputGroup>
  );
};

export default TextSearch;
