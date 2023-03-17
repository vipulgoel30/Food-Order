import React, { useRef } from 'react';
import Button from "../UI/Button";
import classes from './MenuItem.module.css';

const MenuItem = (props) => {
  const amountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const quantity = +amountRef.current.value;
    props.onAdd(props.name, props.price, quantity);
  }

  return <div className={classes.menuItem}>
    <div>
      <h1>{props.name}</h1>
      <p><em>{props.about}</em></p>
      <h2>${props.price}</h2>
    </div>
    <div >
      <form className={classes.menuItemForm} onSubmit={submitHandler}>
        <div className="">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amout" min={1} max={5} step={1} defaultValue={1} ref={amountRef} required />
        </div>
        <Button type="submit" className={classes.menuAddButton}>+Add</Button>
      </form>

    </div>
  </div>
}


export default MenuItem;