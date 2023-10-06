import React, {useState , useEffect} from 'react'
import Categories from './Categories'
import Cart from './Cart';
import "../Style/MainContent.css";
import ShoppingList from './ShoppingList';
import  {plantList}  from './PlantList';


const MainContent = () => {
    const [filteredPlantList, setFilteredPlantList] = useState(plantList);
    const [cart, setCart] = useState([]);


    
      useEffect(() => {
        const cartStorage = localStorage.getItem('cart');
        if(cartStorage){
            setCart(JSON.parse(cartStorage));
        }
      }, []);


  const handleCategoryFilter = (selectedCategory) => {
    if (selectedCategory === '') {
      // If no category is selected, show all plant items
      setFilteredPlantList(plantList);
    } else {
      // Filter plant items based on the selected category
      const filteredItems = plantList.filter((item) => item.category === selectedCategory);
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
        <Categories plantList={plantList} onCategoryChange={handleCategoryFilter} />          
        <ShoppingList plantList={filteredPlantList} addToCart={addToCart} />  
       </div> 
    </div>
  )
}

export default MainContent