import "../styles/globals.css";
import Head from "next/head";
import ClientOnly from "./ClientOnly";
import { createTheme, ThemeProvider, themeOption } from "@mui/material";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const theme = createTheme(themeOption);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kapable</title>
        <link
          href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ClientOnly>
          <Component {...pageProps} />
        </ClientOnly>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
