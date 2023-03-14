function Header(props) {
  const { onClickCart } = props;

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers store</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 rub.</span>
        </li>
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/heart.svg" alt="liked" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
