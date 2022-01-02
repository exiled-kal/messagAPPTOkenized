import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div className="">
      <div className="flex s">
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
}

export default Message;
