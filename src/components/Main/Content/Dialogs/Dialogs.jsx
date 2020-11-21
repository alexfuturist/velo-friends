import React from 'react';

import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';

import s from './Dialogs.module.css';
import MessagesItem from './MessagesItem/MessagesItem';



const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <MessagesItem name={m.name} messageText={m.messagesText} id={m.id} />);

  let newMessageElement = React.createRef(); //создали ссылку на элемент

  //колбэк функция 
  let addMessage = () => {
    props.dispatch({type:"ADD-MESSAGE"});
  };

  //
  let updateMessage = () => {
    let text = newMessageElement.current.value; //считали данные из элемента
    props.dispatch({type:"UPDATE-MESSAGE", newMessageText: text});
  };


  return (
    <section className={s.dialogs}>

      <p className={s.dialogsTitle}>Повідомлення</p>

      <div className={s.dialogsContent}>
        <div className={s.dialogsColumn}>
          <div className={s.dialog}>
            {dialogsElements}
          </div>
        </div>

        <div className={s.messagesColumn}>
          <div className={s.messagesItems}>
            {messagesElements}
          </div>

          <div className={s.newPosts}>
            <p className={s.newPosts__title}>Нове повідомлення</p>
            <textarea onChange={updateMessage} ref={newMessageElement} className={s.newPosts__text} value={props.state.newMessageText} placeholder="моє повідомлення.."></textarea>
            <button onClick={addMessage} className={`button ${s.newPosts__button}`}>Відправити</button>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Dialogs;