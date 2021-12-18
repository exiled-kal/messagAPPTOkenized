import Image from "next/image";
import token from "../images/token.png";
import crypto from "../images/Crypto.png";

function Login() {
  return (
    <div className="bg-black relative ">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 ">
        <Image
          className="object-cover rounded-full"
          src={crypto}
          alt=""
          height={200}
          weight={200}
        />
        <button className="bg-yellow-300 rounded-lg p-5 font-bold animate-pulse">
          Login to METAVerse
        </button>
      </div>
      <div className="w-ful h-screen">
        <Image src={token} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
