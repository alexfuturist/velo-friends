import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { withAuthRedirect } from '../../../../hoc/AuthRedirect'
import {
    addNewMessage,
    resetNewMessageField,
    setCurrentTextOfMessage,
    SetCurrentTextOfMessageActionType,
} from '../../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { getUserProfile } from '../../../../redux/profile-reducer'
import { AppStateType } from '../../../../redux/redux-store'
import { DialogMessagesType, DialogType } from '../../../../types/types'

type MapStatePropsType = {
    dialogs: DialogType[]
    dialogsMessages: DialogMessagesType[]
    isAuth: boolean
    authorizedUserId: number | null
    photos: string
    match?: any
}

type MapDispatchPropsType = {
    addNewMessage: (newMessageText: string, dialogId: number) => void
    getUserProfile: (userId: number | null) => void
    resetNewMessageField: () => void
    setCurrentTextOfMessage: (
        currentTextOfMessage: string,
        dialogId: number
    ) => SetCurrentTextOfMessageActionType
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class DialogsContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.authorizedUserId
        this.props.getUserProfile(userId)
    }

    render() {
        let dialogId = this.props.match.params.dialogId
        console.log(dialogId)

        return <Dialogs {...this.props} dialogId={dialogId} />
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        dialogsMessages: state.dialogsPage.dialogsMessages,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
        photos: state.profilePage.profileInfo.photos.small,
    }
}

export default compose(
    connect(
        mapStateToProps,
        {
            addNewMessage,
            getUserProfile,
            resetNewMessageField,
            setCurrentTextOfMessage,
        }
    ),
    withRouter,
    withAuthRedirect
)(DialogsContainer) as React.ComponentType
