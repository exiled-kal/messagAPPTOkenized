import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.N}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
