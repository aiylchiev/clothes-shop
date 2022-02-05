import React from 'react';
import Card from '../UI/Card';
import style from './Sidebar.module.css'
import odejda from '../../assets/icons/odejda.png'
import obuv from '../../assets/icons/obuv.png'
import bruk from '../../assets/icons/bruc.png'
import futbol from '../../assets/icons/futbol.png'
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const classes = style.odejda
    return <Card className={style['sidebar-block']}>
        <h1>Sidebar</h1>
        <ul>
            <li>
                <img className={classes} src={odejda} alt="#"/>
                <NavLink activeClassName={style.active} to="/clothers">Одежды</NavLink>
            </li>
            <li>
                <img className={classes} src={obuv} alt="#"/>
                <NavLink activeClassName={style.active} to="/shoes">Обуви</NavLink>
            </li>
            <li>
                <img className={classes} src={bruk} alt="#"/>
                <NavLink activeClassName={style.active} to="/trousers">Брюки</NavLink>
            </li>
            <li>
                <img className={classes} src={futbol} alt="#"/>
                <NavLink activeClassName={style.active} to="/tshirt">Футболки</NavLink>
            </li>
        </ul>
    </Card>
}
export default Sidebar;