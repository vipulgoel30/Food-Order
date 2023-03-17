import React from 'react';
import About from "./component/Summary/Summary";
import Header from "./component/Header/Header";
import Menu from "./component/Menu/Menu";
import Cart from "./component/Cart/Cart";


function App() {
  return (
    <div>
      <Cart />
      <Header />
      <main>
        <About />
        <Menu />
      </main>
    </div>
  );
}

export default App;
