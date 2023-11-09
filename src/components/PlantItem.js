import React from 'react';
import "../Style/PlantItem.css"
import CareScale from './CareScale';
import monstera from '../assets/monstera.jpg';
import lyrata from '../assets/lyrata.jpg';
import pothos from '../assets/pothos.jpg';
import succulent from '../assets/succulent.jpg';
import olivier from '../assets/olivier.jpg';
import basil from '../assets/basil.jpg';
import mint from '../assets/mint.jpg';
import calathea from '../assets/calathea.jpg';
import cactus from '../assets/cactus.jpg';



const PlantItem = ({ plant, addToCart }) => {
  const imageMap = {
    monstera,
    lyrata,
    pothos,
    succulent,
    olivier,
    basil,
    mint,
    calathea,
    cactus,
  };

  return (
   
    <div className="plant-card">
        <span className='plant-price'>{plant.price}$</span>
      <img src={imageMap[plant.cover]} alt={plant.name} className="plant-image" />
      <h3 className="plant-title">{plant.name}</h3>
      <CareScale item={plant.water} type="water" />
      <CareScale item={plant.light} type="light" />
      <button className="add-button" onClick={() => addToCart(plant)}>Ajouter</button>
    </div>
  );
};

export default PlantItem;
