import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appI>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
