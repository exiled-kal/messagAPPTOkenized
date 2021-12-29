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
          <div className='h-48 w-48'>
            <Avatar logoutOnPress />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
