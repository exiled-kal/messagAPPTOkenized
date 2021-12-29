import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} ser>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
