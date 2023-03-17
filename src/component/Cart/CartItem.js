import React from 'react';
import Button from "../UI/Button";
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const incrementQuantHandler = () => {
    props.onAdd(props.name, props.price, 1);
  }
  const decrementQuantHandler = () => {
    props.onDel(props.name, props.price, 1);
  }

  return <div className={classes.cartItem}>
    <div>
      <h2>{props.name}</h2>
      <div>
        <span className={classes.cartItemPrice}>${props.price}</span>
        <span className={classes.cartItemQuantity}>x {props.quantity}</span>
      </div>
    </div>
    <div className={classes.quantBtnContainer}>
      <Button onClick={decrementQuantHandler}>—</Button>
      <Button onClick={incrementQuantHandler}>+</Button>
    </div>
  </div>
}

export default CartItem