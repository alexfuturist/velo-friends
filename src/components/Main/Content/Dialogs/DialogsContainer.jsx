import React from 'react';
import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessage: (text) => {
      dispatch(updateMessageActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

