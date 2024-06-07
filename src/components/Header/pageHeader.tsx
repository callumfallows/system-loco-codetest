import { HStack, Img, Heading, IconButton } from "@chakra-ui/react";

type PageContentContainerProps = {
  header: React.ReactNode;
  pageIcon: string;
  pageDescription: string;
};

const PageHeader = ({
  header,
  pageIcon,
  pageDescription,
}: PageContentContainerProps) => {
  return (
    <HStack width="full" justifyContent="space-between">
      <HStack width="auto" alignContent="baseline" spacing="2" paddingY="4">
        <Img src={pageIcon} alt={pageDescription} width="40px" height="40px" />
        <Heading as="h1" size="md" data-cy="title-header">
          {header}
        </Heading>
      </HStack>
      <HStack width="auto">
        <IconButton
          isDisabled
          aria-label="Notifications"
          icon={
            <Img
              width="16px"
              height="19px"
              src="/icons/icon-notification-bell.svg"
              alt="Notifications"
            />
          }
        />
        <IconButton
          isDisabled
          aria-label="Apps"
          icon={
            <Img
              width="16px"
              height="16px"
              src="/icons/icon-apps.svg"
              alt="Apps"
            />
          }
        />
        <IconButton
          isDisabled
          aria-label="Account"
          icon={
            <Img
              width="20px"
              height="20px"
              src="/icons/icon-account--circle.svg"
              alt="Account"
            />
          }
        />
      </HStack>
    </HStack>
  );
};

export { PageHeader };
