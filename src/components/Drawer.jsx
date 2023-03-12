function Drawer(props) {
  const { onClose = Function.prototype, items = [] } = props;
  console.log(items);

  return (
    <div className="overlay">
      <div className="drawer ">
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

        <div className="items">
          {items.map((item) => (
            <div className="cartItem d-flex align-center mb-20">
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
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Cost:</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li>
              <span>Duty 5%</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
          <button className="greenButton">
            Order{" "}
            <img
              width={15}
              height={15}
              src="/img/angle-right.svg"
              alt="Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
