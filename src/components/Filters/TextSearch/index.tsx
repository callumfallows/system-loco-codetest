import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { customBackgroundColors } from "~/styles/theme";

const TextSearch = ({
  onChange,
  value,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BiSearch color="gray.300" />
      </InputLeftElement>
      <Input
        rounded="lg"
        type="text"
        color="surface2.200"
        _placeholder={{
          color: "surface2.200",
        }}
        width="full"
        maxWidth="436px"
        placeholder="Search Devices"
        onChange={onChange}
        value={value}
        backgroundColor={customBackgroundColors.surface2}
      />
    </InputGroup>
  );
};

export default TextSearch;
