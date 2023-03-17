import React, { useContext, useEffect, useState } from 'react';
import Button from "../UI/Button";
import classes from './Header.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import HeaderImage from "./HeaderImage";
import { CartContext } from "../../context/cart-context";
import { CartStateContext } from "../../context/cart-state-context";

const Header = () => {
  const [btnHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContext = useContext(CartContext);
  const cartStateContext = useContext(CartStateContext);

  const { quantityCart } = cartContext;

  useEffect(() => {
    if (quantityCart === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => { clearTimeout(timer) }
  }, [quantityCart])

  return <React.Fragment>
    <header className={`${classes.header} flex-center`}>
      <h2>ReactMeals</h2>
      <Button className={`${classes.cartButton} flex-center ${btnHighlighted ? classes.cartButtonAnimation : ''}`} id="cart-button" onClick={cartStateContext.showCart}>
        <span>
          <HiShoppingCart className={classes.cartBadge} />
        </span>
        <span>Your Cart</span>
        <span className={classes.cartQuantity}>{cartContext.quantityCart}</span>
      </Button>
    </header >
    <HeaderImage />
  </React.Fragment >
}

export default Header;