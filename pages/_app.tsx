import React from "react";
import Head from "next/head";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

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
        <Component {...pageProps} />
        <CSSReset />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
