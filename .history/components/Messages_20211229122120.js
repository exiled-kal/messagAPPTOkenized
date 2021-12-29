import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
  return (
    <div className="pb-56">
      <div className="">
        <ByMoralis
          variant="dark"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            // paddingBottom: "10px",
          }}
        />
      </div>
      <h1>I am the messages</h1>
    </div>
  );
}

export default Messages;
