import './MovieRating.css';

function MovieRating({ rating, place }) {
    return (
        <div
            className={`
                movie-rating
                ${place && 'movie-rating_place_' + place}
            `}
        >
            <span className='movie-rating__count' >
                {rating}
            </span>
        </div>
    );
}

export default MovieRating;