import { useMoralis } from "react-moralis";
import Avatar from "../components/Avatar";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? "rounded-br-none bg-pink-300"
            : "rounded-br-none bg-blue-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <p classNmae>{message.get("username")}</p>
    </div>
  );
}

export default Message;
