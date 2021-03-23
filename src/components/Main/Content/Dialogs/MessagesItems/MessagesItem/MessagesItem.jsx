import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './MessagesItem.module.css';

const MessagesItem = (props) => {
  return (
    <div className={s.messageWrapper}>
      <div className={s.messageAuthor}>
        <div className={s.messageAuthorPhoto}>

        </div>
        <div className={s.messageAuthorName}>
          {props.name}
      </div>
      </div>
      <p className={s.messageText}>
        {props.messageText}
      </p>
    </div>
  );
}

export default MessagesItem;