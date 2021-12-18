import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div>
        <button></button>
      </div>
      <div className="">
        <Image src="/images/token.png" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
