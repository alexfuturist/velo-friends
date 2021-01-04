import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addMessageActionCreator, updateMessageActionCreator } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
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

let AuthRedirectComponent = (props) => {
  if(!props.isAuth) return <Redirect to="login"/>
  return <Dialogs {...props}/>
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;

