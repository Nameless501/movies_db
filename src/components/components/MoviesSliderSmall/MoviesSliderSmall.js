import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MovieCard from '../../components/MovieCard/MovieCard';
import './MoviesSliderSmall.css';
import "swiper/css";
import "swiper/css/navigation";

function MoviesSliderSmall({ movies }) {
    return (
        <div className='slider-small'>
            <Swiper
                loop={true}
                slidesPerView={6}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                slidesPerGroup={2}
                className="slider-small__swiper"
            >
                {
                    movies?.map(movie => {
                        return(
                            <SwiperSlide key={movie.id}>
                                <MovieCard
                                    movie={movie}
                                    place='slider'
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default MoviesSliderSmall;