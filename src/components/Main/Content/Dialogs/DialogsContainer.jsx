import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { addMessage } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
};

export default compose (
  connect(mapStateToProps, {
    addMessage
  }),
  withAuthRedirect
) (Dialogs);