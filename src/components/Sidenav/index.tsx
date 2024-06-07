/**
 * The `SideNav` component represents the side navigation bar in the application.
 * It contains the main navigation links and the logo with the sign-out container.
 * The component is responsible for rendering the side navigation UI and managing its layout.
 */
import { VStack } from "@chakra-ui/react";

import { LogoWithSignoutContainer } from "./logoSignoutContainer";
import { MainNavigation } from "./mainNavigation";

const SideNav = () => {
  return (
    <VStack
      width="340px"
      height="calc(100vh - 100px)"
      justifyContent="space-between"
      alignItems="space-between"
    >
      <MainNavigation />
      <LogoWithSignoutContainer />
    </VStack>
  );
};

export default SideNav;
