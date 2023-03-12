import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr =[
  {
  name:'Мужские кроссовки Nike Sneaker1',
  price: 12999,
  imageUrl:'/img/sneakers/sneak1.webp'
},
 {name:'Мужские кроссовки Nike Sneaker2', 
 price:9999,
 imageUrl:'/img/sneakers/sneak2.webp'
},{name:'Мужские кроссовки Nike Sneaker3', 
price:6800,
imageUrl:'/img/sneakers/sneak3.jpg'
},{name:'Мужские кроссовки Nike Sneaker4', 
price:1200,
imageUrl:'/img/sneakers/sneak4.webp'
}]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1 >All sneakers</h1>
          <div className='search-block d-flex align-center'>
            <img width={15} height={15}src='/img/search.svg' alt='Search'/>
            <input placeholder='Search'/>
          </div>
        </div>
        <div className="d-flex">
          {arr.map(el=>(
            <Card key={el.name} {...el} onClick={()=>console.log(arr)}/>
          ))
          }      
          
        </div>
      </div>
    </div>
  );
}

export default App;
