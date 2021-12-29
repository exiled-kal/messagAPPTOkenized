import Image from "next/image";
import { useMoralis } from "react-moralis";
import Rick from "../images/ricki.png";
import Avatar from "./Avatar";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={Rick}
          />
        </div>
        <div>
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1>Welcome to the MetaMessage App</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
