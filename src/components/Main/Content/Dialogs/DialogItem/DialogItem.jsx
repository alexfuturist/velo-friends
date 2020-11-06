import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './DialogItem.module.scss';

const DialogItem = (props) => {
  return (
            <p className={s.dialogItem}>
              <NavLink to={"/dialogs/" + props.id} className={s.NavLink} activeClassName={s.dialogItemActive}>{props.name}</NavLink>
            </p>
  );
}

export default DialogItem;