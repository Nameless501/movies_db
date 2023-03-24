import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNowPlaying } from '../../../store/nowPlaying/nowPlayingSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SlideMain from '../../components/SlideMain/SlideMain';
import './SliderMain.css';

function SliderMain() {
    const { results } = useSelector((state) => state.nowPlaying);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowPlaying());
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
                    results.slice(0, 5).map(movie => {
                        return(
                            <SwiperSlide key={movie.id}>
                                <SlideMain {...movie} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    );
}

export default SliderMain;