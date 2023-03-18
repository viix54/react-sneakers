import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter as Router} from 'react-router-dom'



function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [sneakers,setSneakers] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([]);


  useEffect(()=>{
     axios.get('/items').then(res=>setSneakers(res.data))
   
     axios.get('/cart').then(result=>setCartItems(result.data))
    
  },[])

  const onChangeSearcInput = (event)=>{
    setSearchValue(event.target.value)
  }
  

  const onAddToCart = (obj)=>{
    axios.post('/cart',obj)
    setCartItems(prev=> [
      ...prev,
      obj
    ])
    //https://640e0f48b07afc3b0dbe173c.mockapi.io/cart
    // let isExistObj = cartItems.indexOf(obj.name);
    // console.log(isExistObj)
    // if(isExistObj === -1){
    //   console.log('hey')
    //   setCartItems(prev=>[...prev,obj])
    // }
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

  const onAddToFavorite = (obj) => {
    if(favorites.find(el => el.id === obj.id)){
      axios.delete(`/favorites/${obj.id}`)
      setFavorites((prev) => prev.filter(item=>item.id !== obj.id));
      console.log(favorites)
    }
    axios.post("https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite", obj);
    setFavorites((prev) => [...prev, obj]);
    console.log(sneakers)
  };


  return (
    <Router>
    <div className="wrapper clear">
      
      {cartOpened&&<Drawer items = {cartItems} onClose={()=>setCartOpened(false)} deleteFromCart={deleteFromCart}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      
        <Routes>
            <Route path="/" element={ <Home sneakers={sneakers} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearcInput={onChangeSearcInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>} />
            
            <Route path="/favorites" element={<Favorites sneakers={favorites} onAddToFavorite={onAddToFavorite}/>}/>
          </Routes>
       
    </div> 
    </Router>
  );
}

export default App;
