import React, { useState } from 'react';

const CartStateContext = React.createContext({
  state: false,
  showCart: () => { },
  hideCart: () => { }
});

const CartStateProvider = (props) => {
  const [cartState, setCartState] = useState(false);

  const showCartHandler = () => {
    setCartState(true);
  }

  const hideCartHandler = () => {
    setCartState(false);
  }


  return <CartStateContext.Provider value={{
    state: cartState,
    showCart: showCartHandler,
    hideCart: hideCartHandler
  }}>{props.children}</CartStateContext.Provider>

}

export { CartStateProvider, CartStateContext };