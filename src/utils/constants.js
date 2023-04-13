// error messages



export const ERROR_NO_MOVIES = 'Ничего не найдено';

export const ERROR_MOVIES_INPUT = 'Нужно ввести ключевое слово';

export const ERROR_MOVIES_FETCH = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const ERROR_NO_USER_MOVIES = 'Нет сохраненных фильмов';



// database API URL's and params



export const DB_API_BASE_URL = 'https://api.themoviedb.org/3';

export const DB_API_KEY = '?api_key=7dc59b842d86576bd986dae0db4b7703';


export const MOVIES_API_PATH_TOP_RATED = DB_API_BASE_URL + '/movie/top_rated';

export const MOVIES_API_PATH_NOW_PLAYING = DB_API_BASE_URL + '/movie/now_playing';

export const MOVIES_API_PATH_POPULAR = DB_API_BASE_URL + '/movie/popular';

export const getMovieInfoPath = (id) => `${DB_API_BASE_URL}/movie/${id}`;

export const getMovieCreditsPath = (id) => `${DB_API_BASE_URL}/movie/${id}/credits`;

export const getMovieReviewsPath = (id) => `${DB_API_BASE_URL}/movie/${id}/reviews`;

export const getMovieRecommendationsPath = (id) => `${DB_API_BASE_URL}/movie/${id}/recommendations`;

export const getMovieTrailerPath = (id) => `${DB_API_BASE_URL}/movie/${id}/videos`;


export const SHOWS_API_PATH_TOP_RATED = DB_API_BASE_URL + '/tv/top_rated';

export const SHOWS_API_PATH_POPULAR = DB_API_BASE_URL + '/tv/popular';

export const getShowInfoPath = (id) => `${DB_API_BASE_URL}/tv/${id}`;

export const getShowCreditsPath = (id) => `${DB_API_BASE_URL}/tv/${id}/credits`;

export const getShowReviewsPath = (id) => `${DB_API_BASE_URL}/tv/${id}/reviews`;

export const getShowRecommendationsPath = (id) => `${DB_API_BASE_URL}/tv/${id}/recommendations`;

export const getShowTrailerPath = (id) => `${DB_API_BASE_URL}/tv/${id}/videos`;


export const SEARCH_API_PATH_MOVIES = DB_API_BASE_URL + '/search/movie';

export const SEARCH_API_PATH_SHOWS = DB_API_BASE_URL + '/search/tv';


export const USER_API_PATH_REQUEST_TOKEN = DB_API_BASE_URL + '/authentication/token/new';

export const USER_API_PATH_LOGIN = DB_API_BASE_URL + '/authentication/token/validate_with_login';

export const USER_API_PATH_SESSION_ID = DB_API_BASE_URL + '/authentication/session/new';


export const getLangParam = (lang) => `&language=${lang}`;

export const getPageParam = (page) => `&page=${page}`;

export const getQueryParam = (query) => `&query=${query}`;


export const POSTER_HORIZONTAL_SMALL = 'https://image.tmdb.org/t/p/w500/';

export const POSTER_HORIZONTAL_ORIGINAL = 'https://image.tmdb.org/t/p/original/';

export const POSTER_VERTICAL_SMALL = 'https://image.tmdb.org/t/p/w500/';

export const TRAILER_BASE_URL = 'https://www.youtube.com/embed/';



// share links



export const URL_FOR_SHARE = window.location.protocol + '//' + window.location.host + '/movies_db/#';

export const getEncodedUrlForShare = (type, id) => encodeURIComponent(`${URL_FOR_SHARE}/${type}/${id}`);

export const getTelegramShareLink = (type, id) => `https://t.me/share/url?url=${getEncodedUrlForShare(type, id)}`;

export const getWhatsappShareLink = (type, id) => `https://api.whatsapp.com/send?text=${getEncodedUrlForShare(type, id)}`;

export const getTwitterShareLink = (type, id) => `https://twitter.com/intent/tweet?url=${getEncodedUrlForShare(type, id)}`;

export const getLinkForCopy = (type, id) => `${URL_FOR_SHARE}/${type}/${id}`;


// screen sizes

export const SCREEN_SIZE_TABLET = 1024;

export const SCREEN_SIZE_MOBILE = 768;