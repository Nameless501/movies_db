import {
    MOVIES_API_PATH_TOP_RATED,
    MOVIES_API_PATH_POPULAR,
    MOVIES_API_PATH_NOW_PLAYING,
    SHOWS_API_PATH_TOP_RATED,
    SHOWS_API_PATH_POPULAR,
    SEARCH_API_PATH_MOVIES,
    SEARCH_API_PATH_SHOWS,
    DB_API_KEY,
    getMovieInfoPath,
    getMovieCreditsPath,
    getMovieReviewsPath,
    getMovieRecommendationsPath,
    getMovieTrailerPath,
    getShowInfoPath,
    getShowCreditsPath,
    getShowReviewsPath,
    getShowRecommendationsPath,
    getShowTrailerPath,
    getLangParam,
    getPageParam,
    getQueryParam,
} from "./constants";



// routes inside application



export const routesConfig = {
    main: '/',
    movies: {
        info: '/movies',
        topRated: '/movies/top-rated',
        nowPlaying: '/movies/now-playing',
        popular: '/movies/popular',
    },
    shows: {
        info: '/shows',
        topRated: '/shows/top-rated',
        popular: '/shows/popular',
    },
    search: '/search',
    saved: '/saved',
    profile: '/profile',
    signIn: '/sign-in',
    signUp: '/sign-up',
    notFound: '/not-found',
};



// navigation bar config



export const navBarConfig = [
    { title: 'Главная', link: routesConfig.main, isDropdown: false },
    {
        title: 'Фильмы', isDropdown: true, links: [
            { link: routesConfig.movies.popular, title: 'Популярные' },
            { link: routesConfig.movies.topRated, title: 'С наивысшим рейтингом' },
            { link: routesConfig.movies.nowPlaying, title: 'Сейчас в кино' },
        ]
    },
    {
        title: 'Сериалы', isDropdown: true, links: [
            { link: routesConfig.shows.popular, title: 'Популярные' },
            { link: routesConfig.shows.topRated, title: 'С наивысшим рейтингом' },
        ]
    },
    { title: 'Поиск', link: routesConfig.search, isDropdown: false },
]



// database API config



export const dbApiConfig = {
    movies: {
        topRated: {
            options: {
                method: 'GET',
            },
            getUrl: (lang = 'ru-RU', page = 1) => {
                return `${MOVIES_API_PATH_TOP_RATED}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        nowPlaying: {
            options: {
                method: 'GET',
            },
            getUrl: (lang = 'ru-RU', page = 1) => {
                return `${MOVIES_API_PATH_NOW_PLAYING}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        popular: {
            options: {
                method: 'GET',
            },
            getUrl: (lang = 'ru-RU', page = 1) => {
                return `${MOVIES_API_PATH_POPULAR}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        info: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'ru-RU') => {
                return `${getMovieInfoPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
        credits: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US') => {
                return `${getMovieCreditsPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
        reviews: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US', page = 1) => {
                return `${getMovieReviewsPath(id)}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        recommendations: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'ru-RU', page = 1) => {
                return `${getMovieRecommendationsPath(id)}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        trailer: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US') => {
                return `${getMovieTrailerPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
    },
    shows: {
        topRated: {
            options: {
                method: 'GET',
            },
            getUrl: (lang = 'ru-RU', page = 1) => {
                return `${SHOWS_API_PATH_TOP_RATED}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        popular: {
            options: {
                method: 'GET',
            },
            getUrl: (lang = 'ru-RU', page = 1) => {
                return `${SHOWS_API_PATH_POPULAR}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        info: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'ru-RU') => {
                return `${getShowInfoPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
        credits: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US') => {
                return `${getShowCreditsPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
        reviews: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US', page = 1) => {
                return `${getShowReviewsPath(id)}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        recommendations: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'ru-RU', page = 1) => {
                return `${getShowRecommendationsPath(id)}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
            }
        },
        trailer: {
            options: {
                method: 'GET',
            },
            getUrl: (id, lang = 'en-US') => {
                return `${getShowTrailerPath(id)}${DB_API_KEY}${getLangParam(lang)}`;
            }
        },
    },
    search: {
        movies: {
            options: {
                method: 'GET',
            },
            getUrl: (keyword, lang = 'ru-RU', page = 1) => {
                return `${SEARCH_API_PATH_MOVIES}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}${getQueryParam(encodeURI(keyword))}`;
            }
        },
        shows: {
            options: {
                method: 'GET',
            },
            getUrl: (keyword, lang = 'ru-RU', page = 1) => {
                return `${SEARCH_API_PATH_SHOWS}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}${getQueryParam(encodeURI(keyword))}`;
            }
        },
    },
}



// errors configs



export const signInErrorsConfig = {
    401: 'Вы ввели неправильный логин или пароль.',
    500: 'При авторизации произошла ошибка.',
}

export const signUpErrorsConfig = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При регистрации пользователя произошла ошибка.',
}

export const profileErrorsConfig = {
    409: 'Пользователь с таким email уже существует.',
    500: 'При обновлении профиля произошла ошибка.',
    signOut: 'На сервере произошла ошибка. ',
}



// inputs validation config



export const validationConfig = {
    name: {
        pattern: /^[a-zA-Zа-яА-ЯёЁ-]+[a-zA-Zа-яА-ЯёЁ -]*$/,
        validationError: 'Имя может содержать только буквы, пробел или дефис',
        emptyError: 'Заполните это поле.',
    },
    email: {
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        validationError: 'Email введен некорректно',
        emptyError: 'Заполните это поле.',
    },
}