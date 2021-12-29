import { useMoralis } from "react-moralis";

function SendMessage() {
  const { user, Moralis } = useMoralis();
  return (
    <form className="flex fiew-11/12">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        type="text"
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button className="font-bold text-blue-200">Send Message</button>
    </form>
  );
}

export default SendMessage;
