import { BASE_URL_MOVIES } from './constants';

export function handleMovieDataFormat({ nameRU, nameEN, country, director, duration, year, image, id, description, trailerLink }) {
    return {
        nameRU,
        nameEN,
        description,
        country,
        director,
        duration,
        year,
        trailerLink,
        image: BASE_URL_MOVIES + image.url,
        thumbnail: BASE_URL_MOVIES + image.formats.thumbnail.url,
        movieId: id,
    };
}

export function getMovieId(movie, moviesList) {
    const movieData = moviesList.find(element => element.nameRU === movie.nameRU);
    return movieData ? movieData._id : '';
}