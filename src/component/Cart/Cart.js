import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import classes from './Cart.module.css';
import { Modal, ModalOverlay } from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import { CartContext } from "../../context/cart-context";
import { CartStateContext } from "../../context/cart-state-context";


const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartStateContext = useContext(CartStateContext);

  return <section  >
    {cartStateContext.state && <>
      {ReactDOM.createPortal(<ModalOverlay onClickHandler={cartStateContext.hideCart} />, document.getElementById('modal-overlay'))}
      {ReactDOM.createPortal(<Modal className={classes.cart}>
        <ul>
          {cartContext.cart.map((item, index) => <li key={index} ><CartItem price={item.price} name={item.name} quantity={item.quantity} onAdd={cartContext.addItemCart} onDel={cartContext.delItemCart} /></li>)}
        </ul>

        <div className={classes.cartTotal}>
          <h1>Total Amount</h1>
          <h1>${cartContext.totalCart.toFixed(2)}</h1>
        </div>

        <div className={classes.cartBtnContainer}>
          <Button className={classes.cartClose} onClick={cartStateContext.hideCart}>Close</Button>
          {cartContext.quantityCart ? <Button className={classes.cartOrder}>Order</Button> : ''}

        </div>
      </Modal>, document.getElementById('modal'))}
    </>}

  </section >
}


export default Cart;