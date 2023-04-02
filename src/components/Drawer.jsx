function Drawer(props) {
  const { onClose = Function.prototype, items = [], deleteFromCart } = props;

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
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty_cart.png"
              alt="emptyBox"
            />

            <h2>Empty cart</h2>
            <p className="opacit-6">
              Add at least one paar of shoes to make an order
            </p>
            <button className="greenButton" onClick={onClose}>
              <img
                width="12px"
                height="12px"
                src="/img/arrow_back.svg"
                alt="Arrow"
              />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
