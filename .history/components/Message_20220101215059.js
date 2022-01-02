import {useMoralis} from 'react-moralis'


function Message({ message }) {
  const {user} = useMoralis();
  return (
    <div>
      <p>{message.get}</p>
    </div>
  );
}

export default Message;
