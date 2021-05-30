import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/AuthRedirect';
import { addNewMessage, resetNewMessageField, setCurrentTextOfMessage } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import { getUserProfile } from '../../../../redux/profile-reducer';


class DialogsContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.authorizedUserId;
    this.props.getUserProfile(userId);
  }

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
    // newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
    photos: state.profilePage.profileInfo.photos.small,
  }
};

export default compose(
  connect(mapStateToProps, {
    addNewMessage,
    getUserProfile,
    resetNewMessageField,
    setCurrentTextOfMessage
  }),
  withRouter,
  withAuthRedirect
)(DialogsContainer);