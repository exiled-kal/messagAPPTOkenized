import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get('ethAddress') === user._isLinked('ethAddress')
  return (
    <div className="">
      <p>{message.get("message")}</p>
    </div>
  );
}

export default Message;
