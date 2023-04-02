import Card from "../components/Card";
import { AppContext } from "../App";
import { useContext } from "react";

function Home(props) {
  const {
    sneakers,
    cartItems,
    searchValue,
    onChangeSearcInput,
    onAddToCart,
    onAddToFavorite,
    setSearchValue,
    isLoading,
  } = props;

  const { isItemAdded } = useContext(AppContext);

  const renderItems = () => {
    const filteredSneakers =
      sneakers &&
      sneakers.filter((sneak) =>
        sneak.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    return (isLoading ? [...Array(10)] : filteredSneakers).map((el, index) => (
      <Card
        key={index}
        {...el}
        onPlus={(obj) => {
          onAddToCart(obj);
        }}
        onFavorite={(obj) => onAddToFavorite(obj)}
        added={isItemAdded(item.id)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>{searchValue ? `Search for: ${searchValue}` : "All sneakers"}</h1>
        <div className="search-block d-flex align-center">
          <img width={15} height={15} src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              width={13}
              height={13}
              src="/img/cross.svg"
              alt="clear"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearcInput}
            placeholder="Search"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
