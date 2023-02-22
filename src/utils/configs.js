import { BASE_URL_MAIN, BASE_URL_MOVIES, MOVIES_API_KEY } from "./constants";

// routes inside application

export const routesConfig = {
    main: '/',
    movieInfo: '/movie',
    topRated: '/top-rated',
    search: '/find-movie',
    savedMovies: '/saved-movies',
    profile: '/profile',
    signIn: '/sign-in',
    signUp: '/sign-up',
    notFound: '/not-found',
};

// config for fetch

export const moviesApiConfig = {
    topRated: {
        url: BASE_URL_MOVIES + '/movie/top_rated' + MOVIES_API_KEY,
        options: {
            method: 'GET',
        },
    },
    nowPlaying: {
        url: BASE_URL_MOVIES + '/movie/now_playing' + MOVIES_API_KEY,
        options: {
            method: 'GET',
        },
    },
    movieInfo: {
        url: BASE_URL_MOVIES + '/movie/',
        options: {
            method: 'GET',
        },
    }
}

export const apiConfig = {
    signIn: {
        url: BASE_URL_MAIN + '/signin',
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    },
    signUp: {
        url: BASE_URL_MAIN + '/signup',
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
    },
    signOut: {
        url: BASE_URL_MAIN + '/signout',
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    },
    userData: {
        url: BASE_URL_MAIN + '/users/me',
        method: 'PATCH',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    },
    tokenCheck: {
        url: BASE_URL_MAIN + '/users/me',
        method: 'GET',
        credentials: 'include',
    },
    userMovies: {
        url: BASE_URL_MAIN + '/movies',
        method: 'GET',
        credentials: 'include',
    },
    saveMovie: {
        url: BASE_URL_MAIN + '/movies',
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    },
    deleteMovie: {
        url: BASE_URL_MAIN + '/movies',
        method: 'DELETE',
        credentials: 'include',
    },
    movies: {
        url: BASE_URL_MOVIES + '/beatfilm-movies',
        method: 'GET',
    }
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