import {ByMoralis, useMoralis, useMoralisQuery} from 'react-moralis'

function Messages() {
  return (
    <div className="pb-56">
      <div> 
      <ByMoralis style={{marginLeft}} />
      </div>
      <h1>I am the messages</h1>
    </div>
  );
}

export default Messages;
