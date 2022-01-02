import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div className="">
      <div className={`flex space-x-4 p-3 rounded-lg${isUserMssage ? 'rounded-br-none bg-pinl-300'}`}>
        <p>{message.get("message")}</p>
      </div>
    </div>
  );
}

export default Message;
