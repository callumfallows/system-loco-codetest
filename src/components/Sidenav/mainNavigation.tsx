import {
  useDisclosure,
  Box,
  useMediaQuery,
  Flex,
  VStack,
  IconButton,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { customBackgroundColors } from "~/styles/theme";
import NavItemDesktopDesktop from "./navItemDesktop";

const MainNavigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <Box width="auto" bg="none" p={0}>
      <Flex
        direction="column"
        as="nav"
        width="full"
        minWidth="200px"
        maxWidth="360px"
        padding="2"
        background={customBackgroundColors.surface2}
      >
        <VStack width="full">
          <NavItemDesktopDesktop
            iconSrc="/icons/icon-device-list.svg"
            iconAlt="Device List"
            iconWidth="14px"
            iconHeight="10px"
            label="Device List"
            href="/"
            disabled
            active
          />
          <NavItemDesktopDesktop
            iconSrc="/icons/icon-device-map.svg"
            iconAlt="Device Map"
            iconWidth="14px"
            iconHeight="10px"
            label="Device Map"
            href="/"
            disabled
            active={false}
          />
          <NavItemDesktopDesktop
            iconSrc="/icons/icon-device-profiles.svg"
            iconAlt="Device Profiles"
            iconWidth="14px"
            iconHeight="10px"
            label="Device Profiles"
            href="/"
            disabled
            active={false}
          />
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
