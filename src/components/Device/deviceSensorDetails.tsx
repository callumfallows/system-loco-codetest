/**
 * A React component that renders a card displaying details about a sensor, including its name, value, and unit.
 *
 * @param {DeviceSensorDetailsProps} props - The props for the component.
 * @param {string} props.detailTitle - The title of the sensor detail.
 * @param {string} props.value - The value of the sensor.
 * @param {string} props.iconSrc - The source of the icon to display.
 * @param {string} props.iconAlt - The alt text for the icon.
 * @returns {JSX.Element} - The rendered sensor detail card.
 */
import { HStack, Img, Skeleton, Text, VStack } from "@chakra-ui/react";

type DeviceSensorDetailsProps = {
  detailTitle: string;
  value: string;
  iconSrc: string;
  iconAlt: string;
};
const DeviceSensorDetails = ({
  detailTitle,
  value,
  iconSrc,
  iconAlt,
}: DeviceSensorDetailsProps) => {
  if (!value) {
    return <Skeleton />;
  }
  return (
    <VStack
      textAlign="left"
      spacing="0"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Text fontSize="xs" color="gray.400">
        {detailTitle}
      </Text>
      <Text fontSize="sm" color="black">
        <HStack spacing="2" justifyContent="flex-start">
          <Img src={iconSrc} alt={iconAlt} width="15px" />
          <Text width="full" fontSize="xs">
            {value}
          </Text>
        </HStack>
      </Text>
    </VStack>
  );
};

export default DeviceSensorDetails;
