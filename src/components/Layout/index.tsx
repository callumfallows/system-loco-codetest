/**
 * `PageContentContainer` is a React component that provides a layout for a page content area. It includes a header with a page icon, title, and some action buttons, as well as a side navigation component and the main content area.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.header - The header content for the page.
 * @param {React.ReactNode} props.children - The main content for the page.
 * @param {string} props.pageIcon - The URL of the page icon image.
 * @param {string} props.pageDescription - A description of the page, used as the alt text for the page icon.
 * @returns {React.ReactElement} - The `PageContentContainer` component.
 */
import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import SideNav from "../Sidenav";

type PageContentContainerProps = {
  children: React.ReactNode;
};

const PageContentContainer = ({ children }: PageContentContainerProps) => {
  return (
    <VStack width="100%" p={0} alignItems="flex-start" overflowX="hidden">
      <HStack
        paddingX="2"
        width="full"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing="0"
      >
        <SideNav />
        <VStack
          justifyContent="flex-start"
          padding="0"
          marginRight="50px"
          alignItems="flex-start"
          width="full"
          overflowX="scroll"
          height="100vh"
        >
          {children}
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PageContentContainer;
