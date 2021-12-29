import Image from "next/image";
import { useMoralis } from "react-moralis";
import Rick from "../images/ricki.png"

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div>
        <div>
          <Image
            layout="fill"
            className=""
            src={ricki}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
