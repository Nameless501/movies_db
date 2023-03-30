import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useResize from '../../../hooks/useResize';
import PosterCard from '../PosterCard/PosterCard';
import './SliderSmall.css';
import "swiper/css";
import "swiper/css/navigation";

function SliderSmall({ movies, type }) {
    const { isTablet, isMobile } = useResize();

    return (
        <div className='slider-small'>
            <Swiper
                loop={true}
                slidesPerView={isMobile ? 3 : isTablet ? 4 : 6}
                spaceBetween={isMobile ? 10 : isTablet ? 15 : 30}
                navigation={true}
                modules={[Navigation]}
                slidesPerGroup={2}
                className="slider-small__swiper"
            >
                {
                    movies?.map(movie => {
                        return(
                            <SwiperSlide key={movie.id}>
                                <PosterCard
                                    movie={movie}
                                    place='slider'
                                    type={type}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default SliderSmall;