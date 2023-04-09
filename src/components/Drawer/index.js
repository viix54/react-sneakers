import Info from "../Info";
import { useState } from "react";
import axios from "axios";
import { useCart } from "../../hooksx/useCart";

import styles from "./Drawer.module.scss";

console.log(styles.overlay)

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer(props) {
  const [isComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    onClose = Function.prototype,
    items = [],
    deleteFromCart,
    opened,
  } = props;

  const { cartItems, setCartItems, totalPrice } = useCart();

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://6410b271ff89c2e2d4e68d77.mockapi.io/orders",
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("/cart/" + item.id);
        await delay(1000);
      }
    } catch (error) {
      console.log(error);
      alert(`Order didn't make, sorry !`);
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened?styles.overlayVisible:''}`}>
      <div className={`${styles.drawer}`}>
        <h2 className="mb-30 d-flex justify-between ">
          Cart
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            width={13}
            height={13}
            src="/img/cross.svg"
            alt="delItem"
          />
        </h2>

        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className="cartItemImg"
                  ></div>

                  <div className="mr-20 flex ">
                    <p className="mb-5">{item.name}</p>
                    <b>{item.price} rub.</b>
                  </div>
                  <img
                    className="removeBtn"
                    width={13}
                    height={13}
                    src="/img/cross.svg"
                    alt="delItem"
                    onClick={() => deleteFromCart(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Cost:</span>
                  <div></div>
                  <b>{totalPrice} rub.</b>
                </li>
                <li>
                  <span>Duty 5%</span>
                  <div></div>
                  <b>{totalPrice * 0.05} rub.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className="greenButton"
                onClick={onClickOrder}
              >
                Order{" "}
                <img
                  width={15}
                  height={15}
                  src="/img/angle-right.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isComplete ? "Items are ordered" : "Empty Box"}
            description={
              isComplete
                ? `Your order #${+orderId + 1}. It'll be soon on delivery place`
                : "Add at least one paar of shoes to make an order"
            }
            image={
              isComplete ? "/img/new-order-icon-5.jpg" : "/img/empty_cart.png"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
