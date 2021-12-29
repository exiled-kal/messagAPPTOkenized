function SendMessage() {
  return (
    <form>
      <input
        className="outline-none bg-transparent text-white border-4 border-blue-400 z-50 rounded-full w-11/12"
        type="text"
      />
      <button className="font-bold text-blue-200">Send Message</button>
    </form>
  );
}

export default SendMessage;
