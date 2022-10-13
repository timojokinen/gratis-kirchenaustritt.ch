import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#9333ea" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
