import Card from "../components/Card/index";
import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import App, { AppContext } from "../App";

export function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { onAddToCart, onAddToFavorite, isFavoriteAdded } =
    useContext(AppContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://6410b271ff89c2e2d4e68d77.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert(`Orders loading failed`);
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap ">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            orders.map((el, index) => (
              <Card
                key={index}
                {...el}
                favorited={isFavoriteAdded(el)}
                loading={isLoading}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
