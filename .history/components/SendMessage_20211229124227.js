function SendMessage() {
  return (
    <form>
      <input
        className="outline-none bg-transparent text-white border-blue-400 z-50 rounded"
        type="text"
      />
      <button className="font-bold text-blue-500">Send Message</button>
    </form>
  );
}

export default SendMessage;
