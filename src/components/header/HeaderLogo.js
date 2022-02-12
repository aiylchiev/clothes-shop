import React from 'react';
import style from './Header.module.css'
import logo from '../../assets/images/Снимок экрана (29).png'
const HeaderLogo = () => {
    return <div className={style.logoCard}>
    <img src={logo}/>
        <h1>Aiylchiev Shop</h1>
    </div>;
};

export default HeaderLogo;
