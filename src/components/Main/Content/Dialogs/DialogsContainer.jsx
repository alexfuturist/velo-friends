import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
 
  let state = props.store.getState();
  let dialogs = state.dialogsPage.dialogs;
  let messages = state.dialogsPage.messages;
  let newMessageText = state.dialogsPage.newMessageText;

  //колбэк функция 
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  //колбэк функция 
  let updateMessage = (text) => {
    props.store.dispatch(updateMessageActionCreator(text));
  };


  return (
    <Dialogs addMessage={addMessage} updateMessage={updateMessage} dialogs={dialogs} messages={messages} newMessageText={newMessageText} />
  );
}

export default DialogsContainer;