import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={s.navbar}>
      <nav>
        <ul className={s.navbar__items}>
          <li className={s.navbar__item}>
            <NavLink to="/profile" activeClassName={s.navbar__active}>
              Моя сторінка
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/dialogs" activeClassName={s.navbar__active}>
              Повідомлення
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/photos" activeClassName={s.navbar__active}>
              Фото з подорожей
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/routes" activeClassName={s.navbar__active}>
              Маршрути
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/music" activeClassName={s.navbar__active}>
              Музика
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/users" activeClassName={s.navbar__active}>
              Мої підписки
            </NavLink>
          </li>
          <li className={` ${s.navbar__settings}`}>
            <NavLink to="/settings" activeClassName={s.navbar__active}>
              Налаштування
            </NavLink>
          </li>
        </ul>

        <p className={s.navbar__friends}>
          <NavLink to="/friends" className={s.navbar__friendsTitle} activeClassName={s.navbar__active}>
            Друзі
          </NavLink>
          <ul className={s.friends__items}>
            <li className={s.friends__item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo4h8hLgr_MYH_Ep7z769e--2l0dTU01wv9g&usqp=CAU" alt=""/>
              <p>Михайло</p>
            </li>
            <li className={s.friends__item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo4h8hLgr_MYH_Ep7z769e--2l0dTU01wv9g&usqp=CAU" alt=""/>
              <p>Михайло</p>
            </li>
            <li className={s.friends__item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo4h8hLgr_MYH_Ep7z769e--2l0dTU01wv9g&usqp=CAU" alt=""/>
              <p>Михайло</p>
            </li>
          </ul>
        </p>
      </nav>
    </aside>
  );
}

export default Navbar;