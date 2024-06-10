import React from "react";
import { Select } from "@chakra-ui/react";

interface SelectOptionProps {
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled?: boolean;
  value: string;
  placeholder?: string;
}
const SelectOption: React.FC<SelectOptionProps> = ({
  options,
  onChange,
  value,
  placeholder,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  return (
    <Select
      width="xs"
      borderRadius="sm"
      fontSize="sm"
      value={value}
      borderColor="secondary.300"
      _placeholder={{
        color: "secondary.300",
      }}
      onChange={handleChange}
      {...rest}
      placeholder={placeholder || "Select an option"}
    >
      {options.map((option) => (
        <option key={option.label} value={option.label}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

SelectOption.defaultProps = {
  isDisabled: false,
  placeholder: "Select an option",
};

export default SelectOption;
