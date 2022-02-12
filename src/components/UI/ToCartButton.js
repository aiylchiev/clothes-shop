import React from 'react';
import classes from './ItemToCart.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/CartSlice';
const ToCartButton = (props) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            key: props.id,
            id: props.id,
            name: props.name,
            image: props.image,
            description: props.description,
            price: props.price
        }))
    }
    return <button onClick={addToCartHandler} className={classes['item-to-cart']}>
    <span className={classes.colorToCart}>В корзину</span>
</button>
};
export default ToCartButton;