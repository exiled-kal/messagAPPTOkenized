import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";

function Messages() {
  return (
    <div className="pb-56">
      <div class>
        <ByMoralis
          variant="colour"
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
