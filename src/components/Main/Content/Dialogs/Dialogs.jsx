import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessagesItem from './MessagesItem/MessagesItem';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';



const AddNewMessageForm = (props) => {
  return (
    <form className={s.newPosts} onSubmit={props.handleSubmit}>
      <label htmlFor="newMessage"></label>
      <Field className={s.newPosts__text} component="textarea" name="newMessage" placeholder="моє повідомлення.."></Field>
      <button className={`button ${s.newPosts__button}`}>Відправити</button>
    </form>
  )
}


const AddNewMessageFormRedux = reduxForm({
  form: 'DialogsAddNewMessage'
})(AddNewMessageForm);


const AddNewMessage = (props) => {
   //колбэк функция 
   let addMessage = (formData) => {
    props.addMessage(formData.newMessage);
    console.log(formData.newMessage);
  };

  return (
    <div>
      <p className={s.newPosts__title}>Нове повідомлення</p>
      <AddNewMessageFormRedux onSubmit={addMessage}/>
    </div>
  )
};



const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = props.messages.map(m => <MessagesItem name={m.name} messageText={m.messagesText} key={m.id} id={m.id} />);

 
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

          <AddNewMessage addMessage={props.addMessage}/>
        </div>
      </div>

    </section>
  );
}

export default Dialogs;