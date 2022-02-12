import React from 'react';
import AuthIcon from './AuthIcon';
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom';
const AuthButtonLi = () => {
    return <li className={style.AuthLi}>
        <AuthIcon/>
        <NavLink to="/authentification">
            <p>Регистрация</p>
        </NavLink>
    </li>;
};
export default AuthButtonLi;