import React from 'react';
import s from './Dialogs.module.scss';
import DialogsItems from './DialogsItems/DialogsItems';
import MessagesItems from './MessagesItems/MessagesItems';
import { render } from '@testing-library/react';
import AddNewMessage from './AddNewMessage/AddNewMessage';

class Dialogs extends React.Component {
  render() {
    return (
      <section className={s.dialogs}>

        <p className={s.dialogsTitle}>Повідомлення</p>

        <div className={s.dialogsContent}>
          <div className={s.dialogsColumn}>
            <div className={s.dialog}>
              <DialogsItems {...this.props} />
            </div>
          </div>

          <div className={s.messagesColumn}>
            <div className={s.messagesItems}>
              <MessagesItems {...this.props} dialogId={this.props.dialogId} />
            </div>

            <AddNewMessage
              addNewMessage={this.props.addNewMessage}
              dialogId={this.props.dialogId}
              resetNewMessageField={this.props.resetNewMessageField}
              setCurrentTextOfMessage={this.props.setCurrentTextOfMessage}
              {...this.props}
            />
          </div>
        </div>

      </section>
    )
  }
}

export default Dialogs;
