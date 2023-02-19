import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'swiper/element/bundle';
import { fetchNowPlayingMovies } from '../../../store/nowPlayingMovies/nowPlayingMoviesSlice';
import MovieSlide from '../../components/MovieSlide/MovieSlide';
import './SliderMain.css';

register();

function SliderMain() {
    const { movies } = useSelector((state) => state.nowPlaying);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [dispatch]);

    return (
        <section className='slider-main' >
            <swiper-container
                slides-per-view="1"
                navigation='true'
                loop='true'
                observer='true'
                observeParents='true'
            >
            {
                movies.slice(0, 5).map((movie) => {
                    return (
                        <swiper-slide key={movie.id} >
                            <MovieSlide {...movie} />
                        </swiper-slide>
                    )
                })
            }
        </swiper-container>
        </section >
    );
}

export default SliderMain;