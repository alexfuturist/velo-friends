import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC <PropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <img className={s.header__img} src="https://i.pinimg.com/originals/b5/d2/f4/b5d2f4b06c0390c4dadb66da03ade490.png" />

                <div className={s.login}>
                    {isAuth
                        ?
                        <div>
                            <p className={s.loginName}>
                                {login}
                            </p>
                            <button className={s.logoutButton} onClick={logout}>
                                Вийти
                            </button>
                        </div>
                        :
                        <NavLink className={s.loginLink} to={'/login'}>
                            Авторизуватись
                        </NavLink>
                    }
                </div>
            </div>
        </header >
    );
}

export default Header;