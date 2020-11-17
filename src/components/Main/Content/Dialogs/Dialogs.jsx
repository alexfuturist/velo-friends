import React from 'react';

import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import MessagesItem from './MessagesItem/MessagesItem';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = props.state.messages.map ( m => <MessagesItem name={m.name} messageText={m.messagesText} id={m.id}/> );

  return (
    <section className={s.dialogs}>

      <p className={s.dialogsTitle}>Повідомлення</p>

      <div className={s.dialogsContent}>
        <div className={s.dialogsColumn}>
          <div className={s.dialog}>
            { dialogsElements }
          </div>
        </div>

        <div className={s.messages}>
          { messagesElements }
        </div>
      </div>

    </section>
  );
}

export default Dialogs;