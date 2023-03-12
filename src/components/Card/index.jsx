import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  const { name, price, imageUrl, onClick } = props;

  // const onClickButton = () => {
  //   alert(name);
  // };

  return (
    <div className={styles.card}>
      <div className="favorite">
        <img width={14} height={14} src="/img/heart.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} rub.</b>
        </div>
        <button className="button" onClick={() => onClick()}>
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
