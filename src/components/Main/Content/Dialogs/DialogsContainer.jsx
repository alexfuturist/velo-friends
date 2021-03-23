import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { addMessage } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'


class DialogsContainer extends React.Component {
  render() {
    let dialogId = this.props.match.params.dialogId;

    return (
      <Dialogs {...this.props} dialogId={dialogId} />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    dialogsMessages: state.dialogsPage.dialogsMessages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
  }
};

export default compose(
  connect(mapStateToProps, {
    addMessage
  }),
  withRouter,
  withAuthRedirect
)(DialogsContainer);