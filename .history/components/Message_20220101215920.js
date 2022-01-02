import { useMoralis } from "react-moralis";

function Message({ message }) {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div className="">
      <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-br-none bg-blue-400}`}><div
        
      
    </div>
  );
}

export default Message;
