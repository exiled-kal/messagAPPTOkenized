function SendMessage() {
  return (
    <form>
      <input
        className="outline-none bg-transparent text-white border-blue-700 z-50 rounded-full"
        type="text"
      />
      <button className="font-bold text-blue-500">Send Message</button>
    </form>
  );
}

export default SendMessage;
