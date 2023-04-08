import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'

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
      setIsLoading(true); // if fetchData is evaluating more then once
      const cartResponse = await axios.get('/cart');
      const favoriteResponse = await axios.get('https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite');
      const itemsResponse =await axios.get('/items');

      setIsLoading(false);

      setFavorites(favoriteResponse.data);
  
      setCartItems(cartResponse.data);
    
      setSneakers(itemsResponse.data);
    
     }

     fetchData()
  },[])

  const onChangeSearcInput = (event)=>{
    setSearchValue(event.target.value)
  }
  

  const onAddToCart =async(obj)=>{
    // try {
      if (cartItems.find(el => Number(el.id) === Number(obj.id))){
        axios.delete(`/cart/${obj.id}`)
        setCartItems(prev => prev.filter(objItem => Number(objItem.id) !== Number(obj.id)));
      }else{
        const {data} = await axios.post('/cart',obj);
        setCartItems(prev=> [
          ...prev,
          data
        ])
      }
  }

  const deleteFromCart = (id)=>{
    axios.delete(`/cart/${id}`)
    setCartItems(prev=>prev.filter(item=>item.id !==id))
    // setCartItems(prev=> [
    //   ...prev,
    //   obj
    // ])
    // console.log(setCartItems(prev=>prev.filter(cart=>cart.name !== name)));
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
    return cartItems.some(obj => obj.name === el.name)
  }

  const isFavoriteAdded = (el) =>{
  
    return favorites.some(obj => obj.name === el.name)
  }

  

  return (
    <AppContext.Provider value={{cartItems,favorites,sneakers,isItemAdded,isFavoriteAdded,setCartOpened,setCartItems}}>
      <Router>
        <div className="wrapper clear">
          
          {cartOpened&&<Drawer items = {cartItems} onClose={()=>setCartOpened(false)} deleteFromCart={deleteFromCart}/>}
          
          <Header onClickCart={()=>setCartOpened(true)} />
          
            <Routes>
                <Route path="/" element={ <Home cartItems = {cartItems}sneakers={sneakers} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearcInput={onChangeSearcInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} isLoading = {isLoading}/>} />
                
                <Route path="/favorites" element={<Favorites  onAddToFavorite={onAddToFavorite}/>}/>
              </Routes>
          
        </div> 
      </Router>
    </AppContext.Provider>
  );
}

export default App;
