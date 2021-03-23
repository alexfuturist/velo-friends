import React from 'react';
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
      <AddNewMessageFormRedux onSubmit={addMessage} />
    </div>
  )
};


export default AddNewMessage;
