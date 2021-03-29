import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import s from './MessagesItem.module.scss';

const MessagesItem = (props) => {

  // debugger
  if (props.name == 'Я') {
    return (
      <div className={cn(s.messageWrapper, s.owner)}>
        <div className={s.messageAuthor}>
          <div className={s.messageAuthorPhotoOwner}>
            <img src={props.photos} alt="" />
          </div>
          <div className={s.messageAuthorName}>
            {props.name}
          </div>
        </div>
        <p className={s.messageTextOwner}>
          {props.messageText}
        </p>
      </div>
    );
  } else {
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
}

export default MessagesItem;




// <div className={s.messageWrapper}>
//   <div className={s.messageAuthor}>
//     <div className={s.messageAuthorPhoto}>

//     </div>
//     <div className={s.messageAuthorName}>
//       {props.name}
//     </div>
//   </div>
//   <p className={s.messageText}>
//     {props.messageText}
//   </p>
// </div>