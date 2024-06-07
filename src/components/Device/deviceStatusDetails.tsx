import { Skeleton, Text, VStack } from "@chakra-ui/react";

type DeviceDetailCardProps = {
  detailTitle: string;
  value: string;
};

const DeviceStatusDetails = ({ detailTitle, value }: DeviceDetailCardProps) => {
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
      <Text fontSize="xs">{value}</Text>
    </VStack>
  );
};

export default DeviceStatusDetails;
