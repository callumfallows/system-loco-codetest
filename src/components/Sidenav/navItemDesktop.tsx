import React from "react";
import { HStack, Img, Link, Text } from "@chakra-ui/react";

type NavItemDesktopDesktopProps = {
  iconSrc: string;
  iconAlt: string;
  iconWidth: string | undefined;
  iconHeight: string | undefined;
  label: string;
  href: string;
  disabled: boolean | undefined;
  active: boolean | undefined;
};

const NavItemDesktopDesktop: React.FC<NavItemDesktopDesktopProps> = ({
  iconSrc,
  iconAlt,
  iconWidth = "14px",
  iconHeight = "10px",
  disabled,
  active,
  label,
  href,
}) => {
  return (
    <HStack
      pointerEvents={disabled ? "none" : "auto"}
      borderRadius="md"
      padding="2"
      width="full"
      backgroundColor={active ? "secondary.200" : "none"}
    >
      <Img src={iconSrc} alt={iconAlt} width={iconWidth} height={iconHeight} />
      <Link href={href}>
        <Text>{label}</Text>
      </Link>
    </HStack>
  );
};

export default NavItemDesktopDesktop;
