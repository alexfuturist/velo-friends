import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../../../Common/Paginator/Paginator';
import User from './User/User';
import s from './Users.module.scss';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
  // debugger
  return (
    <section className={s.users} >
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
      <div>
        {users.map(u => <User {...props} u={u} key={u.id} />)}
      </div>
    </section>
  );
};

export default Users;








