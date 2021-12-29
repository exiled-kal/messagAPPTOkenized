import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user } = useMoralis();
  return (
    <div>
      <div>
        <div>
          <Image />
        </div>
      </div>
    </div>
  );
}

export default Header;
