import { DialogMessagesType, MessageType } from "src/shared/types";
import MessagesItem from "./MessagesItem/MessagesItem";
import React from "react";

type PropsType = {
  dialogsMessages: DialogMessagesType[];
  photos: string;
  dialogId: number;
  messagesEnd: HTMLDivElement;
};

class MessagesItems extends React.Component<PropsType> {
  scrollToBottom = () => {
    //@ts-ignore
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  getDialogId() {
    if (this.props.dialogId) {
      return this.props.dialogId;
    } else {
      return 0;
    }
  }

  getMessagesItems() {
    const messagesArray = [
      ...this.props.dialogsMessages.filter((item) => item.id == +this.getDialogId()),
    ];

    if (messagesArray.length > 0) {
      const messagesItems = messagesArray[0].messages.map((m: MessageType) => (
        <MessagesItem
          name={m.name}
          messageText={m.messagesText}
          key={m.id}
          id={m.id}
          photos={this.props.photos}
        />
      ));
      return messagesItems;
    }
  }

  render() {
    return (
      <div id="toBottom">
        {this.getMessagesItems()}
        <div
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            //@ts-ignore
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}

export default MessagesItems;
