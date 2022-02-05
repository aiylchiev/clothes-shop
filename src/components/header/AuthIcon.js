import React from 'react';
import authPng from '../../assets/icons/auth.png'
import style from './Navigation.module.css'
const AuthIcon = () => {
    return <img className={style['auth-icon']} src={authPng}/>
};
export default AuthIcon;