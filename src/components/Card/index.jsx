import styles from "./Card.module.scss";
import { useEffect, useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";

function Card(props) {
  const {
    id,
    name,
    price,
    imageUrl,
    onPlus,
    onFavorite,
    favorited = false,
    added = false,
    loading = false,
  } = props;

  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="163" rx="5" ry="5" width="150" height="15" />
          <rect x="1" y="192" rx="5" ry="5" width="100" height="15" />
          <rect x="116" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="235" rx="5" ry="5" width="80" height="25" />
        </ContentLoader>
      ) : (
        <>
          <div className="favorite">
            <img
              style={{ cursor: "pointer" }}
              width={14}
              height={14}
              src={isFavorite ? "/img/heart_add.svg" : "/img/heart.svg"}
              alt="Unliked"
              onClick={onClickFavorite}
            />
          </div>
          <img width={`100%`} height={130} src={imageUrl} alt="Sneakers" />
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
              src={
                isItemAdded({ name }) ? "/img/addedCard.svg" : "/img/plus.svg"
              }
              alt="plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
