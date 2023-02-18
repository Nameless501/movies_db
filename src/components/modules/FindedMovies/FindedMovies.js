import { useEffect, useLayoutEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, fetchMoreMovies } from '../../../store/movies/moviesSlice';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import Preloader from '../../UI/Preloader/Preloader';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './FindedMovies.css';

function FindedMovies() {
    return (
        <section className='movies'>
            {/* {loading && <Preloader />}
            {(!loading && popular.length > 0) &&
                <>
                    <MoviesList
                        moviesList={popular}
                        userMoviesList={[]}
                    />
                    <MoreButton
                        handleClick={loadMoreMovies}
                    />
                </>
            }
            {(popular.length === 0 && error) &&
                <ErrorMessage
                    text={error}
                    place='movies'
                />
            } */}
        </section>
    );
}

export default FindedMovies;