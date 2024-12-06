import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { addNewMessage, resetNewMessageField, actions } from "src/app/redux/dialogs-reducer";
import Dialogs from "./DialogsPage";
import { getUserProfile } from "src/app/redux/profile-reducer";
import { DialogMessagesType, DialogType } from "src/shared/types";
import { AppStateType } from "src/app/redux/redux-store";
import { withAuthRedirect } from "src/shared/lib/hoc/AuthRedirect";
import React from "react";

type MapStatePropsType = {
  dialogs: DialogType[];
  dialogsMessages: DialogMessagesType[];
  isAuth: boolean;
  authorizedUserId: number | null;
  photos: string;
  match?: any;
};

export type SetCurrentTextOfMessageActionType = {
  type: string;
  currentTextOfMessage: string;
  dialogId: number;
};

type MapDispatchPropsType = {
  addNewMessage: (newMessageText: string, dialogId: number) => void;
  getUserProfile: (userId: number | null) => void;
  resetNewMessageField: () => void;
  setCurrentTextOfMessage: (
    currentTextOfMessage: string,
    dialogId: number,
  ) => SetCurrentTextOfMessageActionType;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

class DialogsContainer extends React.Component<PropsType> {
  componentDidMount() {
    const userId = this.props.authorizedUserId;
    this.props.getUserProfile(userId);
  }

  render() {
    const dialogId = this.props.match.params.dialogId;
    console.log(dialogId);

    return (
      <Dialogs
        {...this.props}
        dialogId={dialogId}
      />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    dialogsMessages: state.dialogsPage.dialogsMessages,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
    photos: state.profilePage.profileInfo.photos.small,
  };
};

export default compose(
  connect(mapStateToProps, {
    addNewMessage,
    getUserProfile,
    resetNewMessageField,
    setCurrentTextOfMessage: actions.setCurrentTextOfMessage,
  }),
  withRouter,
  withAuthRedirect,
)(DialogsContainer) as React.ComponentType;
