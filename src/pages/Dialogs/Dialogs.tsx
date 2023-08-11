import React from 'react';
import s from './Dialogs.module.scss';
import DialogsItems from './DialogsItems/DialogsItems';
import MessagesItems from './MessagesItems/MessagesItems';
import AddNewMessage from './AddNewMessage/AddNewMessage';
// import { DialogMessagesType, DialogType } from '../../../../types/types'
// import { SetCurrentTextOfMessageActionType } from '../../../../redux/dialogs-reducer'

// type PropsType = {
//     dialogs: DialogType[]
//     dialogsMessages: DialogMessagesType[]
//     isAuth: boolean
//     photos: string
//     dialogId: number

//     addNewMessage: (newMessageText: string, dialogId: number) => void
//     resetNewMessageField: () => (dispatch: any) => void
//     setCurrentTextOfMessage: (
//         currentTextOfMessage: string,
//         dialogId: number
//     ) => SetCurrentTextOfMessageActionType
// }

const Dialogs = (props: any) => {
  return (
    <section className={s.dialogs}>
      <p className={s.dialogsTitle}>Повідомлення</p>

      <div className={s.dialogsContent}>
        <div className={s.dialogsColumn}>
          <div className={s.dialog}>
            <DialogsItems {...props} />
          </div>
        </div>

        <div className={s.messagesColumn}>
          <div className={s.messagesItems}>
            <MessagesItems
              {...props}
              dialogId={props.dialogId}
            />
          </div>

          <AddNewMessage
            addNewMessage={props.addNewMessage}
            dialogId={props.dialogId}
            resetNewMessageField={props.resetNewMessageField}
            setCurrentTextOfMessage={props.setCurrentTextOfMessage}
            {...props}
          />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
