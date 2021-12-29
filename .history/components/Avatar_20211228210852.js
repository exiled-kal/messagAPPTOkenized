import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return <Image 
      src={`https://avatars.`}
  />;
}

export default Avatar;
