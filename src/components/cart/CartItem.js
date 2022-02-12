import React from 'react';
import classes from './CartItem.module.css'
import Modal from '../UI/Modal'
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/UI-Sloce';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { cartActions } from '../../store/CartSlice';
const CartItem = (props) => {
    const dispatch = useDispatch()
    const { name, quantity, total, price, id} = props;

    const hideModalCart = () => {
        dispatch(uiActions.hideModal())
    }
    const removeItemHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id))
    }
    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price,
            quantity,
        }))
    }
    return <Modal>
    <h3 className={classes.shoppingCart}>Ваша корзина</h3>
        <li className={classes.CartItem}>
        <Card className={classes.items}>
            <h2 className={classes.name}>name</h2>
            <Card className={classes.summary}>
            kgs total
                <span className={classes.price}>12 kgs</span>
                <span className={classes.amount}> x quantity</span>
            </Card>
            <Card  className={classes.actions}>
                <Button className={classes.minus} onClick={removeItemHandler}>-</Button>
                <Button className={classes.plus} onClick={addItemHandler}>+</Button>
            </Card>
        </Card>
    </li>
    <Button onClick={hideModalCart} className={classes.clooseMoadl}>Close</Button>
    </Modal>
};

export default CartItem;
