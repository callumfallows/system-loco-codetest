/**
 * Renders the device page, displaying detailed information about a specific device.
 * The page includes tabs for different sections, such as Overview, History, Reports & Audits, and more.
 * The Overview tab displays the device's summary, SIM information, status, and sensor data.
 */
import {
  Box,
  Divider,
  Flex,
  Grid,
  HStack,
  Heading,
  IconButton,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { DeviceSensorDetails, DeviceStatusDetails } from "~/components/Device";
import useDevice from "~/hooks/useDevice";
import { calculateTimeFromNow } from "~/util/Dates";

const DevicePage = () => {
  const { device, isLoading, isError } = useDevice();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading devices</div>;
  if (!device) return <div>No device found</div>;
  return (
    <Box width="full">
      <Flex alignItems="center" mb={4} backgroundColor="#F8FAFA">
        <IconButton
          backgroundColor="transparent"
          aria-label="Back"
          onClick={() => window.history.back()}
          icon={<MdArrowBackIos />}
          mr={2}
        />
        <Heading fontSize="xl" fontWeight="400">
          {device.name}
        </Heading>
      </Flex>
      <Tabs colorScheme="black" width="full">
        <TabList width="full">
          <Tab width="full" fontWeight="600" fontSize="12px">
            Overview
          </Tab>
          <Tab width="full" fontWeight="600" fontSize="12px" isDisabled>
            History
          </Tab>
          <Tab width="full" fontWeight="600" fontSize="12px" isDisabled>
            Reports & Audits
          </Tab>
          <Tab width="full" fontWeight="600" fontSize="12px" isDisabled>
            Settings
          </Tab>
          <Tab width="full" fontWeight="600" fontSize="12px" isDisabled>
            Technical Information
          </Tab>
          <Tab width="full" fontWeight="600" fontSize="12px" isDisabled>
            Subscriptions
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(2, 1fr)" gap={0}>
              <HStack
                width="fit-content"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Box width="fit-content">
                  <VStack
                    padding="4"
                    spacing="2"
                    width="full"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Heading as="h3" fontWeight="400" fontSize="xl">
                      Summary
                    </Heading>

                    <DeviceStatusDetails
                      detailTitle="Device Id"
                      value={device.id}
                    />
                    <DeviceStatusDetails
                      detailTitle="Device Name"
                      value={device.name}
                    />
                    <DeviceStatusDetails
                      detailTitle="Model"
                      value={device.model.name}
                    />
                    <DeviceStatusDetails
                      detailTitle="Owner"
                      value="Company / Name"
                    />
                    <DeviceStatusDetails
                      detailTitle="Profile"
                      value="Storage"
                    />
                    <DeviceStatusDetails
                      detailTitle="Firmware"
                      value={device.firmware.current}
                    />

                    <Divider marginBottom="2" />

                    <Heading as="h3" fontWeight="400" fontSize="xl">
                      SIM Information
                    </Heading>
                    <DeviceStatusDetails
                      detailTitle="IMSI"
                      value="310170882064079"
                    />
                    <DeviceStatusDetails
                      detailTitle="SIM ID"
                      value="89011702278820640799"
                    />
                    <DeviceStatusDetails
                      detailTitle="IMEI"
                      value="869738068780928"
                    />
                    <DeviceStatusDetails
                      detailTitle="Sim Status"
                      value="Active (Billable)"
                    />
                  </VStack>
                </Box>

                <Box width="fit-content">
                  <VStack
                    padding="4"
                    spacing="2"
                    width="full"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Heading as="h3" fontWeight="400" fontSize="xl">
                      Status
                    </Heading>
                    <DeviceStatusDetails
                      detailTitle="Battery Level"
                      value="100%"
                    />
                    <DeviceStatusDetails
                      detailTitle="Status Message"
                      value={device.name}
                    />
                    <VStack width="full" alignItems="flex-start">
                      <DeviceStatusDetails
                        detailTitle="Last report"
                        value={calculateTimeFromNow(device.lastReportTime)}
                      />
                      <Text fontSize="xs" color="gray.400">
                        ({moment(device.lastReportTime).toDate().toUTCString()})
                      </Text>
                      <Link href="/report">View Report</Link>
                      <Text fontSize="xs" color="gray.400">
                        Next Report Due
                      </Text>
                      <Text fontSize="xs">
                        {calculateTimeFromNow(device.nextReportTime)}
                      </Text>
                      <Text fontSize="xs" color="gray.400">
                        ({moment(device.nextReportTime).toDate().toUTCString()})
                      </Text>
                    </VStack>
                    <Divider margin="2" variant="ghost" />
                    <Heading as="h3" fontWeight="400" fontSize="xl">
                      Labels
                    </Heading>
                  </VStack>
                </Box>
              </HStack>

              <Box width="full">
                <HStack
                  width="full"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <VStack
                    padding="2"
                    spacing="2"
                    width="full"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Heading as="h3" fontWeight="400" fontSize="xl">
                      Position
                    </Heading>
                    <Skeleton width="full" height="400px" />
                  </VStack>
                  <Box>
                    <VStack
                      padding="2"
                      spacing="2"
                      width="full"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Heading as="h3" fontWeight="400" fontSize="xl">
                        Sensor Data
                      </Heading>
                      <VStack width="full" alignItems="flex-start" spacing="2">
                        <DeviceSensorDetails
                          detailTitle="Temperature Level"
                          value="6 degress"
                          iconAlt="Temprature"
                          iconSrc="/icons/icon-thermostat.svg"
                        />
                        <Text fontSize="10px" color="gray.600">
                          {calculateTimeFromNow(device.nextReportTime)} (
                          {moment(device.nextReportTime).toDate().toUTCString()}
                          )
                        </Text>
                      </VStack>
                      <DeviceSensorDetails
                        detailTitle="Light Level"
                        value="1"
                        iconAlt="Light Level"
                        iconSrc="/icons/icon-light-mode.svg"
                      />
                      <DeviceSensorDetails
                        detailTitle="Humidity"
                        value="50%"
                        iconAlt="Humidity"
                        iconSrc="/icons/icon-humidity.svg"
                      />
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default DevicePage;
