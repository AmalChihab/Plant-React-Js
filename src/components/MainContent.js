import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Cart from './Cart';
import "../Style/MainContent.css";
import ShoppingList from './ShoppingList';
import axios from 'axios';

const MainContent = () => {
  const [plantData, setPlantData] = useState([]);
  const [filteredPlantList, setFilteredPlantList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-access-token': token,
      },
    };
    // Load plant data
    axios.get('http://localhost:8080/api/plants',config)
      .then(response => {
        setPlantData(response.data);
        setFilteredPlantList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    // Load cart from local storage
    const cartStorage = localStorage.getItem('cart');
    if (cartStorage) {
      setCart(JSON.parse(cartStorage));
    }
  }, []);
  

  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === '') {
      // If no category is selected, show all plant items
      setFilteredPlantList(plantData);
    } else {
      // Filter plant items based on the selected category
      const filteredItems = plantData.filter((item) => item.category === selectedCategory);
      setFilteredPlantList(filteredItems);
    }
  };

  const addToCart = (plant) => {
    const updatedCart = [...cart, plant];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.clear();
  };

  return (
    <div className="main_content_container">
      <Cart cart={cart} clearCart={clearCart} />
      <div>
        <Categories plantList={plantData} onCategoryChange={handleCategoryFilter} />
        <ShoppingList plantList={filteredPlantList} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default MainContent;
