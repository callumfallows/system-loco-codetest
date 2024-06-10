/**
 * Renders a set of filters for managing devices, including a text search, model selection, and a refresh button.
 * The filters are used to update the query parameters in the URL, allowing the filters to be shared and persisted.
 * The available device models are fetched from the `useDevices` hook and displayed in the model filter.
 */
import { HStack, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import { BiRefresh } from "react-icons/bi";
import SelectOption from "~/components/Filters/SelectOption";
import TextSearch from "~/components/Filters/TextSearch";
import useDeviceFilters from "~/hooks/useDeviceFilters";

const DeviceFilters: React.FC = () => {
  const { filterValues, updateFilterValues, deviceModels } = useDeviceFilters();
  return (
    <VStack width="full">
      <TextSearch
        value={filterValues.search || ""}
        onChange={(event) => {
          updateFilterValues(event.target.value, "search");
        }}
      />
      <HStack justifyContent="flex-start" width="100%" textAlign="left">
        <SelectOption
          value=""
          placeholder="Manage Filters"
          options={[
            {
              value: "",
              label: "",
            },
          ]}
          onChange={(event) =>
            updateFilterValues(event.target.value, "filters")
          }
          isDisabled
        />
        <SelectOption
          value=""
          placeholder="Label"
          options={[
            {
              value: "",
              label: "",
            },
          ]}
          onChange={(event) => updateFilterValues(event.target.value, "label")}
          isDisabled
        />
        <SelectOption
          placeholder="Model"
          value={filterValues.model || ""}
          options={deviceModels}
          onChange={(event) => {
            updateFilterValues(event.target.value, "model");
          }}
        />
        <IconButton
          onClick={() => {
            window.location.search = "";
          }}
          aria-label="Refresh"
          fontSize="sm"
          borderColor="black"
        >
          <BiRefresh size="12px" color="black" />
        </IconButton>
      </HStack>
    </VStack>
  );
};

export default DeviceFilters;
