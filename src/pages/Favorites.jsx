import Card from "../components/Card/index";

function Favorites(props) {
  const { sneakers = [], onAddToFavorite } = props;
  console.log(sneakers);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap">
          {sneakers.map((el) => (
            <Card
              key={el.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...el}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
