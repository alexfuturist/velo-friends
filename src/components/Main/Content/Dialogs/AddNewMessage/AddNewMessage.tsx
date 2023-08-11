import React, { useEffect } from 'react';
import s from './AddNewMessage.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../../utils/validators/validators';

const AddNewMessageForm = (props: any) => {
  return (
    <form
      className={s.newPosts}
      onSubmit={props.handleSubmit}
    >
      <label htmlFor="newMessage"></label>
      <Field
        className={s.newPosts__text}
        component="textarea"
        name="newMessage"
        validate={[required]}
        placeholder="моє повідомлення.."
      ></Field>
      <button className={`button ${s.newPosts__button}`}>Відправити</button>
    </form>
  );
};

const AddNewMessageFormRedux = reduxForm({
  form: 'DialogsAddNewMessage',
  enableReinitialize: true,
  destroyOnUnmount: false,
})(AddNewMessageForm);

const AddNewMessage = (props: any) => {
  useEffect(() => {
    props.resetNewMessageField();
  }, [props.dialogId]);

  const newMessageText = () => {
    if (props.dialogsMessages.filter((item: any) => item.id == +props.dialogId)[0] != undefined) {
      return props.dialogsMessages.filter((item: any) => item.id == +props.dialogId)[0]
        .newMessageText;
    } else {
      return '';
    }
  };

  const setCurrentTextOfMessage = (formData: any) => {
    props.setCurrentTextOfMessage(formData.newMessage, props.dialogId);
  };

  //колбэк функция
  const addMessage = (formData: any) => {
    props.addNewMessage(formData.newMessage, props.dialogId);
    console.log(formData.newMessage);
  };

  return (
    <div>
      <p className={s.newPosts__title}>Нове повідомлення</p>
      <AddNewMessageFormRedux
        onSubmit={addMessage}
        onChange={setCurrentTextOfMessage}
        initialValues={{ newMessage: newMessageText() }}
      />
    </div>
  );
};

export default AddNewMessage;
