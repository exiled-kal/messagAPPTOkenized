import {useMoralis} from 'react'


function Message({ message }) {
  const {user} = useMoralis();
  return (
    <div>
      <h1>I am message</h1>
    </div>
  );
}

export default Message;
