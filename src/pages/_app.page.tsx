/**
 * The main application component that wraps the entire Next.js application.
 * It sets up the global context, renders the header, and renders the main page component.
 *
 * @param {AppProps} props - The props passed to the application component.
 * @param {React.ReactNode} props.Component - The main page component to be rendered.
 * @param {any} props.pageProps - The props to be passed to the main page component.
 * @returns {JSX.Element} - The rendered application component.
 */
import { Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "~/components/Header";
import { branding } from "~/constants/branding/branding";

import GlobalContext from "~/shared/contexts/globalContext";

const SystemLocoApplication = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalContext>
      <Head>
        <title>{branding.name}</title>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="http-equiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <meta name="rating" content="general" key="rating" />
        <meta name="robots" content="index, follow" key="robots" />
        <meta name="author" content="Callum Fallows" key="author" />
        <meta property="og:title" content="System Loco" key="title" />
        <meta
          name="description"
          content="System Loco Code Test"
          key="description"
        />
        <meta
          property="og:url"
          content="https://github.com/callumfallows/system-loco-codetest"
          key="url"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/dev-libraries.jpg"
          key="image"
        />
        <meta property="og:image:type" content="image/jpeg" key="image:type" />
        <meta property="og:image:width" content="1200" key="image:width" />
        <meta property="og:image:height" content="630" key="image:height" />
        <meta
          property="og:image:alt"
          content="System Loco Code Test"
          key="image:alt"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicon-180.png"
          key="apple"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicon-192.png"
          key="android"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-180.png"
          key="favicon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon-128.png"
          key="icon128"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180.png"
          key="icon180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192.png"
          key="icon192"
        />
      </Head>
      <Flex flexDir="column" minH="100vh" p="4" paddingTop="0">
        <Header title="" />
        <Component {...pageProps} />
      </Flex>
    </GlobalContext>
  );
};

export default SystemLocoApplication;
