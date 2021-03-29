import React, { useEffect } from 'react';
import s from './AddNewMessage.module.scss';
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
  form: 'DialogsAddNewMessage',
  enableReinitialize: true,
  destroyOnUnmount: false
})(AddNewMessageForm);

const AddNewMessage = (props) => {

  useEffect(() => { props.resetNewMessageField() }, [props.dialogId]);

  let newMessageText = () => {
    if (props.dialogsMessages.filter(item => item.id == (+props.dialogId))[0] != undefined) {
      return props.dialogsMessages.filter(item => item.id == (+props.dialogId))[0].newMessageText;
    } else {
      return ""
    }
  };

  let setCurrentTextOfMessage = (formData) => {
    props.setCurrentTextOfMessage(formData.newMessage, props.dialogId);
  };

  //колбэк функция 
  let addMessage = (formData) => {
    props.addNewMessage(formData.newMessage, props.dialogId);
    console.log(formData.newMessage);
  };


  return (
    <div>
      <p className={s.newPosts__title}>Нове повідомлення</p>
      <AddNewMessageFormRedux onSubmit={addMessage} onChange={setCurrentTextOfMessage}
        initialValues={{ newMessage: newMessageText() }} />
    </div>
  )
};

export default AddNewMessage;
