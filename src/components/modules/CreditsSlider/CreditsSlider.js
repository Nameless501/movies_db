import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCredits } from '../../../store/credits/creditsSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ActorCard from '../../components/ActorCard/ActorCard';
import "swiper/css";
import "swiper/css/navigation";
import './CreditsSlider.css';

function CreditsSlider({ type = 'movies' }) {
    const { id } = useParams();
    const { cast } = useSelector(state => state.credits);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchCredits({ type, id }));
    }, [dispatch, id, type]);

    return (
        <section className="credits-slider" >
            <h2 className="credits-slider__title" >
                В ролях:
            </h2>
            <Swiper
                loop={false}
                slidesPerView={'auto'}
                spaceBetween={15}
                navigation={true}
                modules={[Navigation]}
                slidesPerGroupAuto={true}
                direction={'vertical'}
                className="credits-slider__swiper"
            >
                {
                    cast?.map(actor => {
                        return (
                            <SwiperSlide key={actor.id}>
                                <ActorCard
                                    actor={actor}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default CreditsSlider;