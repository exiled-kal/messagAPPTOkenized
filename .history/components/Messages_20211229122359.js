import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            // paddingBottom: "10px",
          }}
        />
      </div>
      <div></div>
      <div>
        <SendMessage />
      </div>
      <div>
          <p>You're up to date{user.getUsername()</p>
      </div>
    </div>
  );
}

export default Messages;
