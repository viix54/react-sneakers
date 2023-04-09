import { Link } from "react-router-dom";
import { useCart } from "../hooksx/useCart";

function Header(props) {
  const { onClickCart } = props;
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </Link>
      </div>
      <ul className="d-flex">
        <li onClick={onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="cart" />
          <span>{totalPrice} rub.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to={"/favorites"}>
            <img width={18} height={18} src="img/heart.svg" alt="liked" />
          </Link>
        </li>
        <li>
          <Link to={"/orders"}>
            <img width={18} height={18} src="img/user.svg" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
