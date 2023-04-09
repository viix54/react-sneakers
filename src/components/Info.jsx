import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="mb-20"
        width="120px"
        height="120px"
        src={image}
        alt="emptyBox"
      />

      <h2>{title}</h2>
      <p className="opacit-6">{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        <img width="12px" height="12px" src="img/arrow_back.svg" alt="Arrow" />
        Go back
      </button>
    </div>
  );
};

export default Info;
