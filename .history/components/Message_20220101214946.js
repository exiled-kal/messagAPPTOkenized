function Message({ message }) {
  const {user} = useMoralisQuery();
  return (
    <div>
      <h1>I am message</h1>
    </div>
  );
}

export default Message;
