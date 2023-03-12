import styles from "./Card.module.scss";
import { useEffect, useState } from "react";

console.log(styles);

function Card(props) {
  const { name, price, imageUrl, onPlus, onFavorite } = props;

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ name, price, imageUrl });
    setIsAdded(!isAdded);
  };

  useEffect(() => {}, [isAdded]);

  return (
    <div className={styles.card}>
      <div className="favorite">
        <img
          style={{ cursor: "pointer" }}
          width={14}
          height={14}
          src="/img/heart.svg"
          alt="Unliked"
          onClick={onFavorite}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} rub.</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={11}
          height={11}
          src={isAdded ? "/img/addedCard.svg" : "/img/plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
