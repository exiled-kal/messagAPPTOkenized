import Image from "next/image";

function Login() {
  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div>
        <button></button>
      </div>
      <div className="">
        <Image
          src="https://wallpaperaccess.com/full/1519085.jpg"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Login;
