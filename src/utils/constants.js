// error messages



export const ERROR_NO_MOVIES = 'Ничего не найдено';

export const ERROR_MOVIES_INPUT = 'Нужно ввести ключевое слово';

export const ERROR_MOVIES_FETCH = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const ERROR_NO_USER_MOVIES = 'Нет сохраненных фильмов';



// database API URL's and params



export const DB_API_BASE_URL = 'https://api.themoviedb.org/3';

export const DB_API_KEY = '?api_key=7dc59b842d86576bd986dae0db4b7703';


export const getApiTopRatedPath = (type) => `${DB_API_BASE_URL}/${type}/top_rated`;

export const getApiNowPlayingPath = (type) => `${DB_API_BASE_URL}/${type}/now_playing`;

export const getApiPopularPath = (type) => `${DB_API_BASE_URL}/${type}/popular`;

export const geApiInfoPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}`;

export const geApiCreditsPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/credits`;

export const geApiReviewsPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/reviews`;

export const geApiRecommendationsPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/recommendations`;

export const geApiTrailerPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/videos`;

export const geApiSearchPath = (type) => `${DB_API_BASE_URL}/search/${type}`;

export const geApiRatingPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/rating`;


export const AUTHORIZATION_API_PATH_REQUEST_TOKEN = DB_API_BASE_URL + '/authentication/token/new';

export const AUTHORIZATION_API_PATH_LOGIN = DB_API_BASE_URL + '/authentication/token/validate_with_login';

export const AUTHORIZATION_API_PATH_SESSION_ID = DB_API_BASE_URL + '/authentication/session/new';

export const AUTHORIZATION_API_PATH_REGISTRATION = 'https://www.themoviedb.org/authenticate/';

export const AUTHORIZATION_API_PATH_SIGN_OUT = DB_API_BASE_URL + '/authentication/session';

export const getRegistrationLink = (requestToken) => `${AUTHORIZATION_API_PATH_REGISTRATION}${requestToken}?redirect_to=${encodeURIComponent(window.location.protocol + '//' + window.location.host + '/movies_db/#/sign-in')}`;


export const USER_API_PATH_PROFILE = DB_API_BASE_URL + '/account';

export const getAccountStatesPath = (type, id) => `${DB_API_BASE_URL}/${type}/${id}/account_states`;

export const getAddToWatchlistPath = (userId) => `${USER_API_PATH_PROFILE}/${userId}/watchlist`;


export const getLangParam = (lang) => `&language=${lang}`;

export const getPageParam = (page) => `&page=${page}`;

export const getQueryParam = (query) => `&query=${query}`;

export const getSessionIdParam = (sessionId) => `&session_id=${sessionId}`;


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