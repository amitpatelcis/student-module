import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/react-big-calendar@0.19.0/lib/css/react-big-calendar.css" rel="stylesheet"/>
    </Head>
      <title>Kapable</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
