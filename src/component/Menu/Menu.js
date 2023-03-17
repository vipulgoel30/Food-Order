import React, { useContext } from 'react';
import Card from "../UI/Card";
import classes from './Menu.module.css';
import MenuItem from "./MenuItem";
import menu from "../../context/menu";
import { CartContext } from "../../context/cart-context";


const Menu = (props) => {
  const context = useContext(CartContext);

  return <Card as="section" className={classes.menu} >
    <ul>
      {menu.map((menuItem) => <li key={menuItem.name}> <MenuItem name={menuItem.name} price={menuItem.price} about={menuItem.about} onAdd={context.addItemCart} /></li>)}
    </ul>
  </Card>
}

export default Menu;