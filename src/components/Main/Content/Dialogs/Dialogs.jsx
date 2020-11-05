import React from 'react';

import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import MessagesItem from './MessagesItem/MessagesItem';

const Dialog = () => {
  return (
    <section className={s.dialogs}>

      <p className={s.dialogsTitle}>Повідомлення</p>

      <div className={s.dialogsContent}>
        <div className={s.dialogsColumn}>
          <div className={s.dialog}>
            <DialogItem name="Михайло" id="1" />
            <DialogItem name="Ізабела" id="2" />
            <DialogItem name="Софія" id="3" />
          </div>
        </div>

        <div className={s.messages}>
          <MessagesItem name="Ізабела" messageText="Привіт! Вже замінив колесо?" />
          <MessagesItem name="Я" messageText="Привіт. Так вже відремонтував і встановив нові катафоти!" />
          <MessagesItem name="Ізабела" messageText="Тоді завтра на 10:30 їдемо 20км по маршруту Б." />
          <MessagesItem name="Я" messageText="ОК" />
        </div>
      </div>

    </section>
  );
}

export default Dialog;