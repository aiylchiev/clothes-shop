import React from 'react';
import AuthIcon from './AuthIcon';
import style from './Navigation.module.css'
const AuthButtonLi = () => {
    return <li className={style.AuthLi}>
        <AuthIcon/>
        <p>Регистрация</p>
    </li>;
};
export default AuthButtonLi;