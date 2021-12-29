import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PU}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
