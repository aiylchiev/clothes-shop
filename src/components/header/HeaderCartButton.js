import React from 'react';
import styles from './HeaderCartButton.module.css'
import cart from '../../assets/icons/trolley.png'
import Button from '../UI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/UI-Sloce';

const HeaderCartButton = () => {
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const dispatch = useDispatch()

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle())
    }
    return <Button onClick={toggleCartHandler} className={styles.cartBlock}>
        <p>{totalAmount}</p>
        <img src={cart} alt="cart"/>
        <b>Your Cart</b>
    </Button>;
};
export default HeaderCartButton;