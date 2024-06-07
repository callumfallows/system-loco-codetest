/**
 * Renders a header component with a title, page icon, and descriptive text.
 *
 * @param {HeaderProps} props - The props for the header component.
 * @param {string} props.title - The title to display in the header.
 * @returns {JSX.Element} The rendered header component.
 */
import { Text } from "@chakra-ui/react";

import { devicesPage } from "~/constants/branding/pages";
import { PageHeader } from "./pageHeader";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <PageHeader
      header={<Text>{title || devicesPage.name}</Text>}
      pageIcon={devicesPage.icon}
      pageDescription={devicesPage.descriptiveText}
    />
  );
}
