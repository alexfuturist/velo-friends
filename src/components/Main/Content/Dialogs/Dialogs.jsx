import React from 'react';

import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import MessagesItem from './MessagesItem/MessagesItem';



const Dialog = () => {

  let dialogsData = [
    {
      id: 1,
      name: 'Михайло'
    },
    {
      id: 2,
      name: 'Ізабела'
    },
    {
      id: 3,
      name: 'Софія'
    }
  ];

  let messagesData = [
    {
      id: 1,
      name: 'Ізабела',
      messagesText: 'Привіт! Вже замінив колесо?'
    },
    {
      id: 2,
      name: 'Я',
      messagesText: 'Привіт. Так вже відремонтував і встановив нові катафоти!'
    },
    {
      id: 3,
      name: 'Ізабела',
      messagesText: 'Тоді завтра на 10:30 їдемо 20км по маршруту Б.'
    },
    {
      id: 4,
      name: 'Я',
      messagesText: 'ОК'
    }
  ];


  let dialogsElements = dialogsData.map ( d => <DialogItem name={d.name} id={d.id} /> );
  let messagesElements = messagesData.map ( m => <MessagesItem name={m.name} messageText={m.messagesText} id={m.id}/> );

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

export default Dialog;