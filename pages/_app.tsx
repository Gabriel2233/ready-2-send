import React from "react";
import Head from "next/head";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { SearchProvider } from "../contexts/searchContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <Head>
          <title>Next.js 9.3 + Prisma</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <SearchProvider>
          <Component {...pageProps} />
          <CSSReset />
        </SearchProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
