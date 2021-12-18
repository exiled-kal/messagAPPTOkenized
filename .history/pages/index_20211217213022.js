import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  return (
    <div className="bg-black relative">
      <Head>
        <title>MetaMessage App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
}
