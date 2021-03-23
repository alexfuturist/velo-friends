import React from 'react';
import MessagesItem from './MessagesItem/MessagesItem';


class MessagesItems extends React.Component {

    getDialogId() {
        if (this.props.dialogId) {
            return this.props.dialogId;
        } else {
            return 0;
        }
    }

    getMessagesItems() {
        // debugger

        let messagesArray = [...this.props.dialogsMessages.filter(item => item.id == (+this.getDialogId()))];

        if (messagesArray.length > 0) {
            let messagesItems = messagesArray[0].messages
                .map(m => <MessagesItem name={m.name} messageText={m.messagesText} key={m.id} id={m.id} />);
            return messagesItems;
        }
    }

    render() {
        return (
            <div>
                {this.getMessagesItems()}
            </div>
        )
    }
}

export default MessagesItems;