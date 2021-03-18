import React, { useState } from 'react';
import './Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';

import { IconButton } from '@material-ui/core';

function Chat() {
  const [input, setInput] = useState('');
  const sendMessage = e => {
    e.preventDefault();
    console.log('clicked');

    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <h4>
          To: <span className='chat__name'>Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className='chat__messages'>
        <h2>I am a message</h2>
      </div>
      <div className='chat__input'>
        <form>
          <input
            value={input}
            placeholder='iMessage'
            type='text'
            onChange={e => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className='chat__mic' />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
