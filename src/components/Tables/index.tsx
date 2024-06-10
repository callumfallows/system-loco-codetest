/**
 * Renders a table component that displays a list of devices.
 * The table includes various columns such as device status, name, last report time, address, labels, model, firmware, and profile.
 * Users can interact with the table by clicking on a row to navigate to the device details page.
 * The table also includes a text search input and filter options to allow users to search and filter the device list.
 */
import {
  HStack,
  Stack,
  Table,
  TableContainer,
  Tag,
  TagLabel,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { PropsWithChildren, useCallback, useEffect } from "react";
import useDeviceFilters from "~/hooks/useDeviceFilters";
import useDevices from "~/hooks/useDevices";
import { Devices } from "~/types/Devices";
import { calculateTimeFromNow } from "~/util/Dates";
import { getQueryStrings } from "~/util/Filters";

const rowStyle = {
  backgroundColor: "#ffffff",
  fontSize: "12px",
};

const alternateRowStyle = {
  backgroundColor: "#f8f8f8",
  fontSize: "12px",
};

const DeviceListTableHeading = ({ children }: PropsWithChildren) => (
  <Th
    padding="2"
    borderLeft="1px solid #EDF2F7"
    color="gray-200"
    fontSize="xs"
    textTransform="capitalize"
  >
    {children}
  </Th>
);

const DeviceListTableValue = ({ children }: PropsWithChildren) => (
  <Td padding="2" borderLeft="1px solid #EDF2F7" fontSize="xs">
    {children}
  </Td>
);

const DeviceListTable = () => {
  const { push } = useRouter();
  const selectDevice = useCallback(
    (id: string) => {
      console.log("device", id, push);
      push(`/device/${id}`);
    },
    [push]
  );

  const { isLoading, isError, filteredDeviceTable, filterValues } =
    useDeviceFilters();
  const { devices } = useDevices();

  useEffect(() => {
    getQueryStrings();
  }, [filteredDeviceTable, filterValues]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading devices</div>;
  if (!filteredDeviceTable) return <div>No devices found</div>;

  return (
    <VStack width="full" justifyContent="flex-start">
      <TableContainer width="full">
        <Table
          size="sm"
          border="1px solid #EDF2F7"
          width="full"
          variant="simple"
        >
          <Thead>
            <Tr>
              <DeviceListTableHeading>Status</DeviceListTableHeading>
              <DeviceListTableHeading>Device Name / ID</DeviceListTableHeading>
              <DeviceListTableHeading>Last Report</DeviceListTableHeading>
              <DeviceListTableHeading>Address</DeviceListTableHeading>
              <DeviceListTableHeading>Labels</DeviceListTableHeading>
              <DeviceListTableHeading>Device Model</DeviceListTableHeading>
              <DeviceListTableHeading>Firmware</DeviceListTableHeading>
              <DeviceListTableHeading>Profile</DeviceListTableHeading>
            </Tr>
          </Thead>
          <Tbody>
            {filteredDeviceTable?.map(
              ({ id, name, lastReportTime, model }: Devices, index: number) => (
                <Tr
                  key={id}
                  cursor="pointer"
                  _hover={{ background: "gray.100 !important" }}
                  style={index % 2 === 0 ? rowStyle : alternateRowStyle}
                  onClick={() => {
                    selectDevice(id);
                  }}
                >
                  <DeviceListTableValue>Status</DeviceListTableValue>
                  <DeviceListTableValue>
                    <Text>{name}</Text>
                    <Text>{id}</Text>
                  </DeviceListTableValue>
                  <DeviceListTableValue>
                    {lastReportTime
                      ? calculateTimeFromNow(lastReportTime)
                      : "N/A"}
                  </DeviceListTableValue>
                  <DeviceListTableValue>192.168.1.100</DeviceListTableValue>
                  <DeviceListTableValue>
                    <Stack>
                      <Tag size="xs">
                        <TagLabel width="full" textAlign="center">
                          Label 1
                        </TagLabel>
                      </Tag>
                      <Tag size="xs">
                        <TagLabel width="full" textAlign="center">
                          Label 2
                        </TagLabel>
                      </Tag>
                    </Stack>
                  </DeviceListTableValue>
                  <DeviceListTableValue>{model?.name}</DeviceListTableValue>
                  <DeviceListTableValue>{model?.product}</DeviceListTableValue>
                  <DeviceListTableValue>Default</DeviceListTableValue>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack justifyContent="flex-start" width="100%" textAlign="left">
        <Text fontSize="xs" width="full" textAlign="left">
          Showing 1 to{" "}
          {filteredDeviceTable?.length < 50 ? filteredDeviceTable?.length : 50}{" "}
          of {devices?.length} devices
        </Text>
      </HStack>
    </VStack>
  );
};

export { DeviceListTable };
