import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieInfo } from '../../../store/movieInfo/movieInfoSlice';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import PagePoster from '../../UI/PagePoster/PagePoster';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import './MovieInfoPage.css';

function MovieInfoPage() {
    const { id } = useParams();
    const { movieData } = useSelector(store => store.movieInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieInfo(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log(movieData)
    }, [movieData]);

    return (
        <div className='movie-info-page' >
            <Header
                place='movies'
            />
            <main className='movie-info-page__content'>
                <PagePoster
                    poster={movieData?.backdrop_path}
                />
                <div className='movie-info' >
                    <img src={POSTER_VERTICAL_SMALL + movieData?.poster_path} alt='Постер фильма' className='movie-info__poster' />
                    <div className='movie-info__info'>
                        <h2 className='movie-info__title' >
                            {`${movieData?.title} (${new Date(movieData?.release_date).getFullYear()})`}
                        </h2>
                        <div className='movie-info__subtitle' >
                            <p className='movie-info__text-fade'>
                                {movieData?.runtime?.toLocaleString('ru', {style: 'unit', unit: 'minute', unitDisplay: 'long'})}
                            </p>
                            <ul className='movie-info__genres'>
                                {movieData?.genres?.map(genre => {
                                    return (
                                        <li key={genre.id}>
                                            <span className='movie-info__text-fade'>
                                                {genre.name}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <p className='movie-info__description'>
                            {movieData?.overview}
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MovieInfoPage;