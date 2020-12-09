import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


let MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
};

let MapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessage: (text) => {
      dispatch(updateMessageActionCreator(text));
    }
  }
}

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);
export default DialogsContainer;

