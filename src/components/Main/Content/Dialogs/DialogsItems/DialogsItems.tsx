import React from 'react';
import DialogItem from './DialogItem/DialogItem';



export const DialogsItems = (props) => {

    // debugger
    let dialogsItems = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

    return (
        <div>
            {dialogsItems}
        </div>
    )
};

export default DialogsItems;