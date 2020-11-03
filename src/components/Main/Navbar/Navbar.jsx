import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <aside className={s.navbar}>
      <nav>
        <ul>
          <li>
            <a href="">
              Моя сторінка
            </a>
          </li>
          <li>
            <a href="">
            Повідомлення
            </a>
          </li>
          <li>
            <a href="">
            Друзі
            </a>
          </li>
          <li>
            <a href="">
            Фото з подорожей
            </a>
          </li>
          <li>
            <a href="">
            Маршрути
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;