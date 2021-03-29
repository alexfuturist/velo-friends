import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './Navbar.module.css';

const Navbar = (props) => {
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
            <NavLink to="/users" activeClassName={s.navbar__active}>
              Мої підписки
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/starusers" activeClassName={s.navbar__active}>
              Зірки спортсмени
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/dialogs" activeClassName={s.navbar__active}>
              Повідомлення
            </NavLink>
          </li>
          {/* <li className={s.navbar__item}>
            <NavLink to="/photos" activeClassName={s.navbar__active}>
              Фото з подорожей
            </NavLink>
          </li> */}
          <li className={s.navbar__item}>
            <NavLink to="/routes" activeClassName={s.navbar__active}>
              Веломаршрути
            </NavLink>
          </li>
          <li className={s.navbar__item}>
            <NavLink to="/aboutproject" activeClassName={s.navbar__active}>
              Про цей проект
            </NavLink>
          </li>
          {/* <li className={s.navbar__item}>
            <NavLink to="/music" activeClassName={s.navbar__active}>
              Музика
            </NavLink>
          </li> */}
          {/* <li className={` ${s.navbar__settings}`}>
            <NavLink to="/settings" activeClassName={s.navbar__active}>
              Налаштування
            </NavLink>
          </li> */}
        </ul>

        <p className={s.navbar__friends}>
          {props.isAuth && <NavbarFriends />}
        </p>
      </nav>
    </aside>
  );
}

const NavbarFriends = () => {
  return (
    <div>
      <NavLink to="/friends" className={s.navbar__friendsTitle} activeClassName={s.navbar__active}>
        Друзі
          </NavLink>
      <ul className={s.friends__items}>
        <li className={s.friends__item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo4h8hLgr_MYH_Ep7z769e--2l0dTU01wv9g&usqp=CAU" alt="" />
          <p>Михайло</p>
        </li>
        <li className={s.friends__item}>
          <img src="https://instagrammi.ru/wp-content/uploads/arnold-shvarcenegger.jpg" alt="" />
          <p>Арнольд</p>
        </li>
        <li className={s.friends__item}>
          <img src="https://kinoafisha.ua/upload/2020/05/news/n27/2c/73954/b_211kuvisyarkii-obraz-teilor-svift.jpg" alt="" />
          <p>Тейлор</p>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps)(Navbar);