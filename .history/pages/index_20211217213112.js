import Head from "next/head";
import Login from "../components/Login";

export default function Home() {
  const user = false;

  
  return (
    <div className="h-screen">
      <Head>
        <title>MetaMessage App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
}
