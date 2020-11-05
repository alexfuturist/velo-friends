import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={s.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={s.navbar__active}>
              Моя сторінка
            </NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={s.navbar__active}>
            Повідомлення
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" activeClassName={s.navbar__active}>
            Друзі
            </NavLink>
          </li>
          <li>
            <NavLink to="/photos" activeClassName={s.navbar__active}>
            Фото з подорожей
            </NavLink>
          </li>
          <li>
            <NavLink to="/routes" activeClassName={s.navbar__active}>
            Маршрути
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;