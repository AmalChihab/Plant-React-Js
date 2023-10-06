import React from 'react';
import "../Style/PlantItem.css"
import CareScale from './CareScale';
const PlantItem = ({ plant, addToCart }) => {
     console.log("dataaa : ",plant)
  return (
   
    <div className="plant-card">
        <span className='plant-price'>{plant.price}$</span>
      <img src={plant.cover} alt={plant.name} className="plant-image" />
      <h3 className="plant-title">{plant.name}</h3>
      <CareScale item={plant.water} type="water" />
      <CareScale item={plant.light} type="light" />
      <button className="add-button" onClick={() => addToCart(plant)}>Ajouter</button>
    </div>
  );
};

export default PlantItem;
