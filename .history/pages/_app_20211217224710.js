import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider aooI>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
