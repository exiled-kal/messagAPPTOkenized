import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUV}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
