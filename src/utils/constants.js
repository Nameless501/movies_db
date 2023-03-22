// movies filter props

export const SHORTFILM_DURATION = 40;

// error messages

export const ERROR_NO_MOVIES = 'Ничего не найдено';

export const ERROR_MOVIES_INPUT = 'Нужно ввести ключевое слово';

export const ERROR_MOVIES_FETCH = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const ERROR_NO_USER_MOVIES = 'Нет сохраненных фильмов';

// movies API URL's and params

export const MOVIES_API_BASE_URL = 'https://api.themoviedb.org/3';

export const MOVIES_API_PATH_TOP_RATED = MOVIES_API_BASE_URL + '/movie/top_rated';

export const MOVIES_API_PATH_NOW_PLAYING = MOVIES_API_BASE_URL + '/movie/now_playing';

export const MOVIES_API_PATH_MOVIES_SEARCH = MOVIES_API_BASE_URL + '/search/movie';

export const MOVIES_API_PATH_SHOWS_SEARCH = MOVIES_API_BASE_URL + '/search/tv';

export const MOVIES_API_KEY = '?api_key=7dc59b842d86576bd986dae0db4b7703';

export const getMoviePath = (id) => `${MOVIES_API_BASE_URL}/movie/${id}`;

export const getMovieCreditsPath = (id) => `${MOVIES_API_BASE_URL}/movie/${id}/credits`;

export const getMovieReviewsPath = (id) => `${MOVIES_API_BASE_URL}/movie/${id}/reviews`;

export const getMovieRecommendationsPath = (id) => `${MOVIES_API_BASE_URL}/movie/${id}/recommendations`;

export const getMovieTrailerPath = (id) => `${MOVIES_API_BASE_URL}/movie/${id}/videos`;

export const getMovieLangParam = (lang) => `&language=${lang}`;

export const getMoviePageParam = (page) => `&page=${page}`;

export const getQueryParam = (query) => `&query=${query}`;

// user API URL's

// export const BASE_URL_MAIN = 'http://movies-explorer-api-production-f471.up.railway.app';

export const BASE_URL_MAIN = 'http://localhost:3000';

export const POSTER_HORIZONTAL_SMALL = 'https://image.tmdb.org/t/p/w500/';

export const POSTER_HORIZONTAL_ORIGINAL = 'https://image.tmdb.org/t/p/original/';

export const POSTER_VERTICAL_SMALL = 'https://image.tmdb.org/t/p/w500/';

export const TRAILER_BASE_URL = 'https://www.youtube.com/embed/';