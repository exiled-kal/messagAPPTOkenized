import Image from "next/image";
import { useMoralis } from "react-moralis";
import Rick from "../images/ricki.png";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div >
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src={Rick}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
