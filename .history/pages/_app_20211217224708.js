import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider aoo>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
