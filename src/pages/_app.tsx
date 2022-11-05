import "../styles/globals.scss";
import "../styles/Background.scss";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Patato</title>
        <meta name="description" content="who dis" />
        <link rel="icon" href="/sofa.png" />
        <meta
          property="og:image"
          content="https://thumbs2.imgbox.com/87/66/c4DbgdON_t.jpg"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "M PLUS Rounded 1c,sans-serif",
          headings: { fontFamily: "M PLUS Rounded 1c,sans-serif" },
          colorScheme: "dark",
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#202023",
              "#29292e",
              "#28282c",
              "#202023",
            ],
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}

export default MyApp;
