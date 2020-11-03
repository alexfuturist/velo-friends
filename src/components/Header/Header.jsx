import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`wrapper ${s.wrapper}`}>
                <img className={s.header__img} src="https://i.pinimg.com/originals/b5/d2/f4/b5d2f4b06c0390c4dadb66da03ade490.png" />
            </div>
        </header >
    );
}

export default Header;