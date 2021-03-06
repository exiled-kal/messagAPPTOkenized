import Head from "next/head";
import { useMoralis, ByMoralis } from "react-moralis";
import Header from "../components/Header";
import Login from "../components/Login";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-blue-300 overflow-hidden">
      <Head>
        <title>MetaMessage App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the App</h1>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
        <ByMoralis variant="dark" />
      </div>
    </div>
  );
}
