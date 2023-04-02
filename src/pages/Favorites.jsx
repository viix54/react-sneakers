import Card from "../components/Card/index";
import React from "react";
import { AppContext } from "../App";

function Favorites(props) {
  const { onAddToFavorite } = props;

  const { favorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        <div className="d-flex flex-wrap">
          {favorites.map((el) => (
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
