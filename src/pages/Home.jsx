import Card from "../components/Card";

function Home(props) {
  const {
    sneakers,
    searchValue,
    onChangeSearcInput,
    onAddToCart,
    onAddToFavorite,
    setSearchValue,
  } = props;

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
      <div className="d-flex flex-wrap">
        {sneakers
          .filter((sneak) =>
            sneak.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el) => (
            <Card
              key={el.imageUrl}
              {...el}
              onPlus={(obj) => {
                onAddToCart(obj);
              }}
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
