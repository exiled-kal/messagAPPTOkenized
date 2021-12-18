import Image from "next/image";
import token from "../images/token.png";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div>
        <Image src={token} alt="" height={200} weight={200} />
        <button></button>
      </div>
      <div className="w-ful h-screen">
        <Image src={token} alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
