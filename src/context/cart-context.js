import React, { useState, createContext } from 'react';


const CartContext = createContext({
  cart: [],
  addItemCart: () => { },
  delItemCart: () => { },
  quantityCart: 0,
  totalCart: 0
});

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  const addItemCartHandler = (name, price, quantity) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.name === name);
      if (index === -1) {
        return [...prevCart, { name, price, quantity }];
      } else {
        prevCart[index].quantity += quantity;
        return prevCart;
      }
    })

    setQuantityCart(prevCartQuant => prevCartQuant + quantity);
    setTotalCart(prevTotal => prevTotal + price * quantity)
  }

  const delItemHandler = (name, price, quantity) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.name === name);
      const value = prevCart[index].quantity - quantity;
      let updatedCart
      if (value > 0) {
        updatedCart = [...prevCart]
        updatedCart[index].quantity = value;
      } else {
        const name = prevCart[index].name;
        updatedCart = prevCart.filter(item => item.name !== name);
      }

      const actualDelQuant = value > 0 ? quantity : prevCart[index].quantity;
      setQuantityCart(prevQuant => prevQuant - (actualDelQuant));
      setTotalCart(prevTotal => prevTotal - (actualDelQuant * price));
      return updatedCart;
    })
  }

  return <CartContext.Provider value={{
    cart,
    addItemCart: addItemCartHandler,
    delItemCart: delItemHandler,
    quantityCart,
    totalCart
  }}>{props.children}</CartContext.Provider>
}



export { CartProvider, CartContext };