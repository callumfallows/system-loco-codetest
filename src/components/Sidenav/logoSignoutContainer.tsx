import {
  useDisclosure,
  useMediaQuery,
  VStack,
  Flex,
  Img,
  HStack,
  IconButton,
  Icon,
  Box,
  Drawer,
  Text,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { branding } from "~/constants/branding/branding";
import { devicesPage } from "~/constants/branding/pages";

const LogoWithSignoutContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return isDesktop ? (
    <VStack
      maxWidth="360px"
      padding="4"
      backgroundColor="gray.50"
      borderRadius="sm"
    >
      <Flex width="full" align="flex-start">
        <Img
          src={branding.logo}
          alt={branding.name}
          width="180px"
          height="40px"
        />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        width="250px"
        padding="4"
        background="gray.50"
      >
        <HStack width="full" paddingY="2" paddingX="2">
          <HStack width="full">
            <Link href="/">
              <Text>Get Help</Text>
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </VStack>
  ) : (
    <Box
      display={{ base: "none", md: "block" }}
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      bg="none"
    >
      <IconButton
        aria-label="Open Menu"
        icon={<Icon as={FiMenu} />}
        onClick={onOpen}
        mr={4}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <Flex align="center" mb={8}>
              <Img
                src={devicesPage.icon}
                alt={devicesPage.name}
                width="18px"
                height="14px"
              />
              <Box fontWeight="bold">My App</Box>
            </Flex>
            <Flex direction="column" as="nav">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </Flex>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export { LogoWithSignoutContainer };
