
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'



function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [sneakers,setSneakers] = useState([])
  const [cartItems,setCartItems] = useState([])
  const [searchValue,setSearchValue] = useState('')
  const [favorites, setFavorites] = useState([]);


  useEffect(()=>{
     axios.get('https://640e0f48b07afc3b0dbe173c.mockapi.io/items').then(res=>setSneakers(res.data))

     axios.get('https://640e0f48b07afc3b0dbe173c.mockapi.io/cart').then(result=>setCartItems(result.data))
    
  },[])

  const onChangeSearcInput = (event)=>{
    setSearchValue(event.target.value)
  }

  const onAddToCart = (obj)=>{
    axios.post('https://640e0f48b07afc3b0dbe173c.mockapi.io/cart',obj)
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
    axios.delete(`https://640e0f48b07afc3b0dbe173c.mockapi.io/cart/${id}`)
    setCartItems(prev=>prev.filter(item=>item.id !==id))
    // setCartItems(prev=> [
    //   ...prev,
    //   obj
    // ])
    // console.log(setCartItems(prev=>prev.filter(cart=>cart.name !== name)));
  }

  const onAddToFavorite = (obj) => {
    axios.post("https://6410b271ff89c2e2d4e68d77.mockapi.io/favorite", obj);
    setFavorites((prev) => [...prev, obj]);
  };


  return (
    <div className="wrapper clear">
      
      {cartOpened&&<Drawer items = {cartItems} onClose={()=>setCartOpened(false)} deleteFromCart={deleteFromCart}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <Routes>
          <Route>
          <Home sneakers={sneakers} searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearcInput={onChangeSearcInput} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}/>
          </Route>
        </Routes>
    
    </div>
  );
}

export default App;
