import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div>
        <div>
          <Image  layout="fill" className="" src="https://links.pa/>
        </div>
      </div>
    </div>
  );
}

export default Header;
