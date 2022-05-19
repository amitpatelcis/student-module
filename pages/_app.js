import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <title>Kapable</title>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
