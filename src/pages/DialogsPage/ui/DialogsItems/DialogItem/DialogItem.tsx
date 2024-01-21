import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.scss";

type PropsType = {
  name: string;
  id: number;
};

const DialogItem: React.FC<PropsType> = (props) => {
  return (
    <p className={s.dialogItem}>
      <NavLink
        to={"/dialogs/" + props.id}
        className={s.NavLink}
        activeClassName={s.dialogItemActive}
      >
        {props.name}
      </NavLink>
    </p>
  );
};

export default DialogItem;
