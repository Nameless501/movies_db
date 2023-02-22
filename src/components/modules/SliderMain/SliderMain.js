import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlayingMovies } from '../../../store/nowPlayingMovies/nowPlayingMoviesSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MovieSlide from '../../components/MovieSlide/MovieSlide';
import './SliderMain.css';

function SliderMain() {
    const { movies } = useSelector((state) => state.nowPlaying);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlayingMovies());
    }, [dispatch]);

    return (
        <section className='slider-main' >
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                className="slider-main__swiper"
            >
                {
                    movies.slice(0, 5).map(movie => {
                        return(
                            <SwiperSlide key={movie.id}>
                                <MovieSlide {...movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    );
}

export default SliderMain;