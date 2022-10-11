import "../styles/globals.scss";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Satoshi, sans-serif",
        headings: { fontFamily: "Satoshi, sans-serif" },
        colorScheme: "dark",
        colors: {
          // override dark colors to change them for all components
          dark: [
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#202023",
            "#202023",
            "#202023",
            "#202023",
          ],
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
