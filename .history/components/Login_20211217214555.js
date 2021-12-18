import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div>
        <button></button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="/images/token.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Login;
