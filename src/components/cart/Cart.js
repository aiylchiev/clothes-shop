import React from 'react';
import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem.js'
import { useSelector } from 'react-redux'
export const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    return <Card className={classes.card}>
        <ul>
        {cartItems.map((item) => (
            <CartItem
            key={item.id}
                item={{ 
                    id: item.id,
                    name: item.name, 
                    quantity: item.quantity, 
                    total: item.totalPrice, 
                    price: item.price
                    }}
            />
        ))}
        </ul>
    </Card>;
};
export default Cart;