import PosterCard from "../PosterCard/PosterCard";
import "./CardsList.css";

function CardsList({ moviesList, type }) {
  return (
    <ul className="cards-list">
      {moviesList.map((currentMovie) => {
        return (
          <li key={currentMovie.id}>
            <PosterCard movie={currentMovie} type={type} />
          </li>
        );
      })}
    </ul>
  );
}

export default CardsList;
