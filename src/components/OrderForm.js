import React, { useState } from 'react';

const OrderForm = ({ cart, clearCart }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  function calculateTotal(cart) {
    const cartTotal = cart ? cart.reduce((total, item) => total + (item.price || 0), 0) : 0;
    return cartTotal;
  }

  const handleSubmitOrder = async (e) => {
    const userData = {
      name: userDetails.name,
      email: userDetails.email,
      address: userDetails.address,
    };

    e.preventDefault();

    // Check if orderForm values are not empty
    if (!userData.name || !userData.email || !userData.address) {
      console.error('Incomplete order information');
      return;
    }

    const total = calculateTotal(cart); // Calculate the total before making the request

    try {
      const userResponse = await fetch('http://localhost:8080/api/plants/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const userResult = await userResponse.json();
      const userId = userResult._id;

      // Check if userId is available
      if (!userId) {
        console.error('User ID not available');
        return;
      }

      const orderResponse = await fetch(`http://localhost:8080/api/plants/createOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          cart,
          total, // Pass the total here
        }),
      });

      if (orderResponse.ok) {
        // Clear the cart and order form
        clearCart();
        setUserDetails({
          name: '',
          email: '',
          address: '',
        });

        // Display a success message
        alert('Commande bien enregistrée');
      } else {
        console.error('Error placing order:', orderResponse.statusText);
      }
    } catch (error) {
      console.error('Error placing order: ', error);
    }
  };

  return (
    <div className="order-form">
      <h2>Commander</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
        </div>
        <button className="button_confirm_order" onClick={handleSubmitOrder}>
          Confirmer la commande
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
