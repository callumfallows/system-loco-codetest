import {
  useDisclosure,
  Box,
  useMediaQuery,
  Flex,
  VStack,
  HStack,
  Img,
  IconButton,
  Icon,
  Drawer,
  Text,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { devicesPage } from "~/constants/branding/pages";

const MainNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Box width="auto" bg="none" p={0}>
      <Flex
        direction="column"
        as="nav"
        width="250px"
        padding="2"
        background="linear-gradient(0deg, #F8FAFA, #F8FAFA), linear-gradient(0deg, rgba(107, 95, 0, 0.05), rgba(107, 95, 0, 0.05));"
      >
        <VStack>
          <HStack
            borderRadius="sm"
            padding="2"
            width="full"
            pointerEvents="none"
            background="yellow.100"
          >
            <Img
              src="/icons/icon-device-list.svg"
              alt="Device List"
              width="14px"
              height="10px"
            />
            <Link href={devicesPage.path}>
              <Text>Device List</Text>
            </Link>
          </HStack>
          <HStack
            borderRadius="sm"
            padding="2"
            width="full"
            pointerEvents="none"
          >
            <Img
              src="/icons/icon-device-map.svg"
              alt="Device Map"
              width="14px"
              height="10px"
            />
            <Link href={devicesPage.path}>
              <Text>Device Map</Text>
            </Link>
          </HStack>
          <HStack
            borderRadius="sm"
            padding="2"
            width="full"
            pointerEvents="none"
          >
            <Img
              src="/icons/icon-device-profiles.svg"
              alt="Device Profiles"
              width="14px"
              height="10px"
            />
            <Link href={devicesPage.path}>
              <Text>Device Profiles</Text>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  ) : (
    <Box
      display={{ base: "none", md: "block" }}
      position="fixed"
      padding="0"
      left="0"
      zIndex="10"
      bg="none"
    >
      <Box padding="4">
        <IconButton
          aria-label="Open Menu"
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          mr={4}
        />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <Flex align="center" mb={8}>
              <Box
                as="img"
                src="/logo.png"
                alt="Logo"
                w="40px"
                h="40px"
                mr={2}
              />
              <Box fontWeight="bold">System Loco</Box>
            </Flex>
            <Flex direction="column" as="nav">
              <Link href="/devices">Devices</Link>
            </Flex>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export { MainNavigation };
