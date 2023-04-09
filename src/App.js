import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import { Orders } from "./pages/Orders";

export const AppContext = React.createContext({});


function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [sneakers,setSneakers] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([]);
  const [isLoading,setIsLoading] = useState(true);


  useEffect(()=>{
     async function fetchData(){
      try {
        setIsLoading(true); // if fetchData is evaluating more then once
      const [cartResponse,favoriteResponse,itemsResponse] = await Promise.all([axios.get('/cart'),axios.get('https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite'),axios.get('/items')])
      setIsLoading(false);

      setFavorites(favoriteResponse.data);
  
      setCartItems(cartResponse.data);
    
      setSneakers(itemsResponse.data);
      } catch (error) {
        alert(`Data's loading failed`);
        console.error(error)
      }
    
     }

     fetchData()
  },[])

  const onChangeSearcInput = (event)=>{
    setSearchValue(event.target.value)
  }
  

  const onAddToCart =async(obj)=>{
    try {
      if (cartItems.find(el => el.name === obj.name)){
        await axios.delete(`/cart/${cartItems.find(el => el.name === obj.name).id}`)
        setCartItems(prev => prev.filter(item => item.name !== obj.name));
      }else{
        setCartItems (prev=>[...prev,obj]);
        const {data} = await axios.post('/cart',obj);
        setCartItems(prev => prev.map(item=>{
          if(item.parentId === data.parentId){
            return {
              ...item,
              id: data.id
            }
          }
          return item;
        }))
      }
    } catch (error) {
      alert(`The system couldn't add this item to basket`);
      console.error(error)
    }
      
  }

  const deleteFromCart = async (id)=>{
    try {
      await axios.delete(`/cart/${id}`)
      setCartItems(prev=>prev.filter(item=>item.id !==id))
    } catch (error) {
      alert(`The system couldn't delete item from basket !`);
      console.error(error)
    }
  }

  const onAddToFavorite = async(obj) => {
    try{
      if (favorites.find(el => el.name === obj.name)) {
        console.log()
        axios.delete(`https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite/${favorites.find(el => el.name === obj.name).id}`)
        setFavorites(prev => prev.filter(item => item.name !== obj.name))
        
      } else {
        const {data} = await axios.post(`https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite`,obj);        
        setFavorites(prev => [...prev,data])
        
      }
    } catch (error){
      alert(`The system can\`t add this objekt !`)
    }
  };

  const isItemAdded = (el) =>{
    return cartItems.some(obj => obj.parentId === el.id)
  }

  const isFavoriteAdded = (el) =>{
  
    return favorites.some(obj => obj.name === el.name)
  }

  

  return (
    <AppContext.Provider value={{cartItems,favorites,sneakers,isItemAdded,isFavoriteAdded,setCartOpened,setCartItems, onAddToFavorite,onAddToCart}}>
      <Router>
        <div className="wrapper clear">
           <Drawer items = {cartItems} onClose={()=>setCartOpened(false)} deleteFromCart={deleteFromCart} opened={cartOpened}/>
        
          
          <Header onClickCart={()=>setCartOpened(true)} />
          
            <Routes>
                <Route path="/" element={ <Home cartItems = {cartItems}sneakers={sneakers} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearcInput={onChangeSearcInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} isLoading = {isLoading}/>} />
                
                <Route path="/favorites" element={<Favorites  onAddToFavorite={onAddToFavorite}/>}/>
                <Route path="/orders" element={<Orders/>}/>
              </Routes>
          
        </div> 
      </Router>
    </AppContext.Provider>
  );
}

export default App;
