import Image from "next/image";
import token from "../images/token.png";
import crypto from "../images/Crypto.png";
import { useMoralis, ByMoralis } from "react-moralis";

function Login() {
  const { authenticate, isInitializing } = useMoralis();

  // if (isInitializing) return "Loading....";

  return (
    <div className="bg-black relative ">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
        <Image
          className="object-cover rounded-full"
          src={crypto}
          alt=""
          height={200}
          weight={200}
        />
        <button
          onClick={authenticate}
          className="bg-yellow-300 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to META Verse
        </button>
        <div className=" p-10">
          <ByMoralis variant="dark" className="pb-40" />
        </div>
      </div>
      <div className="w-ful h-screen">
        <Image src={token} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
