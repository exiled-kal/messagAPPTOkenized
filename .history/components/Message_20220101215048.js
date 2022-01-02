import {useMoralis} from 'react-moralis'


function Message({ message }) {
  const {user} = useMoralis();
  return (
    <div>
      <p>I am message</p>
    </div>
  );
}

export default Message;
