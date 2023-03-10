
function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-40">All sneakers</h1>
        <div className="d-flex">
        <div className="card">
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
          <img width={133} height={112}src ='/img/sneakers/sneak3.jpg' alt="Sneakers"/>
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
          <img width={133} height={112}src ='/img/sneakers/sneak4.webp' alt="Sneakers"/>
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
        </div>
      </div>
    </div>
  );
}

export default App;
