function SendMessage() {
  return (
    <form>
      <input
        className="outline-none bg-transparent text-white border-pink-400 z-50 rounded-full w-11/12"
        type="text"
      />
      <button className="font-bold text-blue-500">Send Message</button>
    </form>
  );
}

export default SendMessage;
