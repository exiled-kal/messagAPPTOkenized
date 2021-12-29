import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={process.env.Next_}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
