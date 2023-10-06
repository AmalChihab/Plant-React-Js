import React from 'react'
import PlantItem from './PlantItem';
import '../Style/PlantItem.css'

const ShoppingList = ({ plantList, addToCart  }) => {
  return (
    <div className='shopping-list-containner'>
     {plantList.map((item) => (
        <PlantItem plant={item} addToCart={addToCart} />
        
      ))}
    </div>
  )
}

export default ShoppingList