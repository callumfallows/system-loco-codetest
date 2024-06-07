import type { NextPage } from "next";
import { Container, HStack, VStack } from "@chakra-ui/react";
import PageContentContainer from "~/components/Layout";
import { DeviceListTable } from "~/components/Tables";

const Home: NextPage = () => {
  return (
    <PageContentContainer>
      <Container
        width="100vw"
        height="100vw"
        maxWidth="100vw"
        overflow="hidden"
        as="main"
      >
        <HStack width="full">
          <HStack width="auto">Logo</HStack>
        </HStack>
        <VStack
          height="full"
          width="full"
          overflow="hidden"
          overflowY="auto"
          alignItems="flex-start"
        >
          <DeviceListTable />
        </VStack>
      </Container>
    </PageContentContainer>
  );
};

export default Home;
