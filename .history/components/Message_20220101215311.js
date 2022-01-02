import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();
  return (
    <div className="">
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
