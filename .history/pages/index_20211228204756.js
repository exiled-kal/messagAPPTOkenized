import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflo">
      <Head>
        <title>MetaMessage App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the App</h1>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
      </div>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
