import "./Rating.css";

function Rating({ rating, place }) {
  return (
    <div
      className={`
                rating
                ${place && "rating_place_" + place}
            `}
    >
      <span className="rating__count">
        {rating === Math.trunc(rating) ? rating : rating.toFixed(1)}
      </span>
    </div>
  );
}

export default Rating;
