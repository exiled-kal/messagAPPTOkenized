function SendMessage() {
  return (
    <form>
      <input
        className="outline-none bg-transparent text-white placeholder-gray-500"
        placeholder={`Enter a Message ${user.}`}
        type="text"
      />
      <button className="font-bold text-blue-200">Send Message</button>
    </form>
  );
}

export default SendMessage;
