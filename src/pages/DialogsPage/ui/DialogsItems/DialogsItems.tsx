import React from "react";
import { DialogType } from "src/shared/types";
import DialogItem from "./DialogItem/DialogItem";

type PropsType = {
  dialogs: DialogType[];
};

export const DialogsItems: React.FC<PropsType> = (props) => {
  const dialogsItems = props.dialogs.map((d) => (
    <DialogItem
      name={d.name}
      key={d.id}
      id={d.id}
    />
  ));

  return <div>{dialogsItems}</div>;
};

export default DialogsItems;
