import {
  getApiTopRatedPath,
  getApiNowPlayingPath,
  getApiPopularPath,
  geApiInfoPath,
  geApiCreditsPath,
  geApiReviewsPath,
  geApiRecommendationsPath,
  geApiTrailerPath,
  geApiSearchPath,
  geApiRatingPath,
  AUTHORIZATION_API_PATH_REQUEST_TOKEN,
  AUTHORIZATION_API_PATH_LOGIN,
  AUTHORIZATION_API_PATH_SESSION_ID,
  AUTHORIZATION_API_PATH_SIGN_OUT,
  USER_API_PATH_PROFILE,
  DB_API_KEY,
  getAccountStatesPath,
  getAddToWatchlistPath,
  getLangParam,
  getPageParam,
  getQueryParam,
  getSessionIdParam,
} from "./constants";

// routes inside application

export const routesConfig = {
  main: "/",
  movie: {
    info: "/movie",
    topRated: "/movie/top-rated",
    nowPlaying: "/movie/now-playing",
    popular: "/movie/popular",
  },
  tv: {
    info: "/tv",
    topRated: "/tv/top-rated",
    popular: "/tv/popular",
  },
  search: "/search",
  saved: "/saved",
  profile: "/profile",
  signIn: "/sign-in",
  notFound: "/not-found",
};

// navigation bar config

export const navBarConfig = [
  { title: "Главная", link: routesConfig.main, isDropdown: false },
  {
    title: "Фильмы",
    isDropdown: true,
    links: [
      { link: routesConfig.movie.popular, title: "Популярные" },
      { link: routesConfig.movie.topRated, title: "С высоким рейтингом" },
      { link: routesConfig.movie.nowPlaying, title: "Сейчас в кино" },
    ],
  },
  {
    title: "Сериалы",
    isDropdown: true,
    links: [
      { link: routesConfig.tv.popular, title: "Популярные" },
      { link: routesConfig.tv.topRated, title: "С высоким рейтингом" },
    ],
  },
  { title: "Поиск", link: routesConfig.search, isDropdown: false },
];

// database API config

export const dbApiConfig = {
  data: {
    topRated: {
      options: {
        method: "GET",
      },
      getUrl: (type, lang = "ru-RU", page = 1) => {
        return `${getApiTopRatedPath(type)}${DB_API_KEY}${getLangParam(
          lang
        )}${getPageParam(page)}`;
      },
    },
    nowPlaying: {
      options: {
        method: "GET",
      },
      getUrl: (type, lang = "ru-RU", page = 1) => {
        return `${getApiNowPlayingPath(type)}${DB_API_KEY}${getLangParam(
          lang
        )}${getPageParam(page)}`;
      },
    },
    popular: {
      options: {
        method: "GET",
      },
      getUrl: (type, lang = "ru-RU", page = 1) => {
        return `${getApiPopularPath(type)}${DB_API_KEY}${getLangParam(
          lang
        )}${getPageParam(page)}`;
      },
    },
    info: {
      options: {
        method: "GET",
      },
      getUrl: (type, id, lang = "ru-RU") => {
        return `${geApiInfoPath(type, id)}${DB_API_KEY}${getLangParam(lang)}`;
      },
    },
    credits: {
      options: {
        method: "GET",
      },
      getUrl: (type, id, lang = "en-US") => {
        return `${geApiCreditsPath(type, id)}${DB_API_KEY}${getLangParam(
          lang
        )}`;
      },
    },
    reviews: {
      options: {
        method: "GET",
      },
      getUrl: (type, id, lang = "en-US", page = 1) => {
        return `${geApiReviewsPath(type, id)}${DB_API_KEY}${getLangParam(
          lang
        )}${getPageParam(page)}`;
      },
    },
    recommendations: {
      options: {
        method: "GET",
      },
      getUrl: (type, id, lang = "ru-RU", page = 1) => {
        return `${geApiRecommendationsPath(
          type,
          id
        )}${DB_API_KEY}${getLangParam(lang)}${getPageParam(page)}`;
      },
    },
    trailer: {
      options: {
        method: "GET",
      },
      getUrl: (type, id, lang = "en-US") => {
        return `${geApiTrailerPath(type, id)}${DB_API_KEY}${getLangParam(
          lang
        )}`;
      },
    },
    search: {
      options: {
        method: "GET",
      },
      getUrl: (type, keyword, lang = "ru-RU", page = 1) => {
        return `${geApiSearchPath(type)}${DB_API_KEY}${getLangParam(
          lang
        )}${getPageParam(page)}${getQueryParam(encodeURI(keyword))}`;
      },
    },
  },
  authorization: {
    token: {
      options: {
        method: "GET",
      },
      getUrl: () => {
        return `${AUTHORIZATION_API_PATH_REQUEST_TOKEN}${DB_API_KEY}`;
      },
    },
    login: {
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      getUrl: () => {
        return `${AUTHORIZATION_API_PATH_LOGIN}${DB_API_KEY}`;
      },
    },
    session: {
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      getUrl: () => {
        return `${AUTHORIZATION_API_PATH_SESSION_ID}${DB_API_KEY}`;
      },
    },
    signOut: {
      options: {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
      getUrl: () => {
        return `${AUTHORIZATION_API_PATH_SIGN_OUT}${DB_API_KEY}`;
      },
    },
  },
  user: {
    profile: {
      options: {
        method: "GET",
      },
      getUrl: (sessionId) => {
        return `${USER_API_PATH_PROFILE}${DB_API_KEY}${getSessionIdParam(
          sessionId
        )}`;
      },
    },
    states: {
      options: {
        method: "GET",
      },
      getUrl: (type, movieId, sessionId) => {
        return `${getAccountStatesPath(
          type,
          movieId
        )}${DB_API_KEY}${getSessionIdParam(sessionId)}`;
      },
    },
    watchlistAdd: {
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      getUrl: (sessionId, userId) => {
        return `${getAddToWatchlistPath(
          userId
        )}${DB_API_KEY}${getSessionIdParam(sessionId)}`;
      },
    },
    rating: {
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      getUrl: (type, id, sessionId) => {
        return `${geApiRatingPath(type, id)}${DB_API_KEY}${getSessionIdParam(
          sessionId
        )}`;
      },
    },
  },
};

// errors configs

export const signInErrorsConfig = {
  401: "Вы ввели неправильный логин или пароль.",
  500: "При авторизации произошла ошибка.",
};

export const profileErrorsConfig = {
  409: "Пользователь с таким email уже существует.",
  500: "При обновлении профиля произошла ошибка.",
  signOut: "На сервере произошла ошибка. ",
};

// inputs validation config

export const validationConfig = {
  name: {
    pattern: /^[a-zA-Zа-яА-ЯёЁ-]+[a-zA-Zа-яА-ЯёЁ -]*$/,
    validationError: "Имя может содержать только буквы, пробел или дефис",
    emptyError: "Заполните это поле.",
  },
  email: {
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validationError: "Email введен некорректно",
    emptyError: "Заполните это поле.",
  },
};
