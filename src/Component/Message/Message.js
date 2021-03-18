import React, { forwardRef } from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, photo, message, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);
    return (
      <div className={`message ${user.email === email && 'message__sender'}`}>
        <Avatar src={photo} className='message__photo' />
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Message;
