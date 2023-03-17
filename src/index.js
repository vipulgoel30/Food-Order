import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { CartProvider } from "./context/cart-context";
import { CartStateProvider } from "./context/cart-state-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <CartStateProvider>
      <App />
    </CartStateProvider >
  </CartProvider>
);
