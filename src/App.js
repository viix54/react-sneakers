
function App() {
  return (
    <div className="wrapper clear">
      <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30'>Cart</h2>
         <div className='items'>
         <div className='cartItem d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/sneak1.webp)'}}className='cartItemImg'></div>

            <div className='mr-20 flex '>
              <p className='mb-5'>Мужские кроссовки Nike Sneaker1</p>
              <b>12 999 rub.</b>
              </div>
              <img className='removeBtn' width={13} height={13} src='/img/cross.svg' alt='delItem'/>
            
          </div>

          <div className='cartItem d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/sneak2.webp)'}}className='cartItemImg'></div>

            <div className='mr-20 flex '>

              <p className='mb-5'>Мужские кроссовки Nike Sneaker2</p>
              <b>12 999 rub.</b>
              </div>
              <img className='removeBtn' width={13} height={13} src='/img/cross.svg' alt='delItem'/>
    
            
          </div>
         </div>
         <div className='cartTotalBlock'>
        <ul >
            <li className='d-flex'>
              <span>Cost:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li className='d-flex'>
              <span>Duty 5%</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
            
            </ul>
          <button className='greenButton'>Order <img width={15} height={15} src='/img/angle-right.svg' alt='Arrow'/></button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width= {40} height={40} src='/img/logo.png' alt="logo"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
        </div>     
         <ul className="d-flex">
            <li className="mr-30"><img width= {18} height={18} src='/img/cart.svg' alt="cart"/>
            <span>1205 rub.</span>
            </li>
            <li>
            <img width= {18} height={18} src='/img/user.svg' alt="user"/>
            </li>
          </ul>

      </header>
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1 >All sneakers</h1>
          <div className='search-block d-flex align-center'>
            <img width={15} height={15}src='/img/search.svg' alt='Search'/>
            <input placeholder='Search'/>
          </div>
        </div>
        <div className="d-flex">
        <div className="card">
          <div className='favorite'>
          <img width={14} height={14}src='/img/heart.svg' alt='Unliked'/>
          </div>
          <img width={133} height={112}src ='/img/sneakers/sneak1.webp' alt="Sneakers"/>
          <h5>Мужские кроссовки Nike Sneaker1</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 rub.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112}src ='/img/sneakers/sneak2.webp' alt="Sneakers"/>
          <h5>Мужские кроссовки Nike Sneaker2</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 rub.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112}src ='/img/sneakers/sneak3.jpg' alt="Sneakers"/>
          <h5>Мужские кроссовки Nike Sneaker3</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 rub.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112}src ='/img/sneakers/sneak4.webp' alt="Sneakers"/>
          <h5>Мужские кроссовки Nike Sneaker4</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 rub.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
