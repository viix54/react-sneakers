import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React, {useState,useEffect} from 'react'



function App() {

  const [cartOpened, setCartOpened] = useState(false)
  const [sneakers,setSneakers] = useState([])
  const [cartItems,setCartItems] = useState([])

  useEffect(()=>{
    fetch('https://640e0f48b07afc3b0dbe173c.mockapi.io/items').then(response=>response.json())
    .then(data=>setSneakers(data))
  },[])

  const onAddToCart = (obj)=>{
    setCartItems(prev=> [
      ...prev,
      obj
    ])
  }


  return (
    <div className="wrapper clear">
      
      {cartOpened&&<Drawer items = {cartItems} onClose={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1 >All sneakers</h1>
          <div className='search-block d-flex align-center'>
            <img width={15} height={15}src='/img/search.svg' alt='Search'/>
            <input placeholder='Search'/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {sneakers.map(el=>(
            <Card key={el.imageUrl} {...el} onPlus={(obj)=>{onAddToCart(obj)}} onFavorite={()=>console.log('Added to favorites')}/>
          ))
          }      
           
        </div>
      </div>
    </div>
  );
}

export default App;
