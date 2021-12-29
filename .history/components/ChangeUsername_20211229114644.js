import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  return (
    <div className="text-sm absolute top-5 right-5">
      <button disabled={isUserUpdating} 
      className="hover:text-white">Change your Username</button>
    </div>
  );
}

export default ChangeUsername;
