import React from 'react';
import './Chat.css';
function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <h4>
          To: <span className='chat__name'>Channel Name</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className='chat__body'></div>
      <div className='chat__input'></div>
    </div>
  );
}

export default Chat;
