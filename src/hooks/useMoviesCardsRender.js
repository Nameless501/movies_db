import { useState, useEffect } from 'react';
import useResize from './useResize';

function useMoviesCardsRender(moviesList) {
    const [renderedMovies, setRenderedMovies] = useState([]);
    const [renderButton, setButtonState] = useState();
    const { cardsCount, newCardsCount } = useResize();

    useEffect(() => {
        setRenderedMovies(moviesList.slice(0, cardsCount));
    }, [moviesList, cardsCount])

    useEffect(() => {
        setButtonState(() => moviesList.length > renderedMovies.length)
    }, [moviesList, renderedMovies])

    function showMoreMovies() {
        setRenderedMovies(currentMovies => [
            ...currentMovies,
            ...moviesList.slice(currentMovies.length, currentMovies.length + newCardsCount)
        ])
    }

    return { renderedMovies, showMoreMovies, renderButton };
}

export default useMoviesCardsRender;