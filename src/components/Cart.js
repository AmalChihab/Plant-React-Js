import React, { useState } from 'react';
import '../Style/Cart.css';
import OrderForm from './OrderForm';

const Cart = ({ cart, clearCart }) => {
  const [isOrderFormVisible, setOrderFormVisible] = useState(false);

  const handleCommanderClick = () => {
    setOrderFormVisible(!isOrderFormVisible);
  };

  return (
    <div>
      <div className="panier_data">
        <span className="span_panier_cart">Panier</span>
        {cart && cart.length > 0 ? (
          <ul className="ul_data_cart">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} : {item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart_isempty_data_cart">Your cart is empty.</p>
        )}

        <span className="span_total_cart">total :{calculateTotal(cart)}</span>
        <button className="button_vider_panier_cart" onClick={clearCart}>
          Vider le panier
        </button>
        <button className="button_vider_panier_cart" onClick={handleCommanderClick}>
          Commander
        </button>
         {isOrderFormVisible && <OrderForm cart={cart} clearCart={clearCart} />}
      </div>
     
    </div>
  );
}

export default Cart;

// Helper function to calculate the total price of items in the cart
function calculateTotal(cart) {
  const cartTotal = cart ? cart.reduce((total, item) => total + (item.price || 0), 0) : 0;
  return cartTotal;
}
