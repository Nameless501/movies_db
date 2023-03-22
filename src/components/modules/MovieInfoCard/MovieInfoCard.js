import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../../../store/movieInfo/movieInfoSlice';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import MovieInfoButtons from '../../components/MovieInfoButtons/MovieInfoButtons';
import './MovieInfoCard.css';

function MovieInfoCard() {
    const { id } = useParams();
    const { movieData } = useSelector(store => store.movieInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieInfo(id));
    }, [dispatch, id]);

    return (
        <div className='movie-info' >
            <img src={POSTER_VERTICAL_SMALL + movieData?.poster_path} alt='Постер фильма' className='movie-info__poster' />
            <h2 className='movie-info__title' >
                {`${movieData?.title} ${movieData?.release_date && '(' + new Date(movieData?.release_date).getFullYear() + ')'}`}
            </h2>
            <div className='movie-info__subtitle' >
                <p className='movie-info__text-fade'>
                    {movieData?.runtime?.toLocaleString('ru', { style: 'unit', unit: 'minute', unitDisplay: 'long' })}
                </p>
                <ul className='movie-info__genres'>
                    {movieData?.genres?.map(genre => {
                        return (
                            <li key={genre.id}>
                                <p className='movie-info__genre'>
                                    {genre.name}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <p className='movie-info__description'>
                {movieData?.overview ? movieData?.overview : 'Кажется описание пока не добавили'}
            </p>
            <MovieInfoButtons
                place='movie-info'
            />
        </div>
    );
}

export default MovieInfoCard;