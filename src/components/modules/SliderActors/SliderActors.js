import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActors } from '../../../store/actors/actorsSlice';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ActorCard from '../../components/ActorCard/ActorCard';
import "swiper/css";
import "swiper/css/navigation";
import './SliderActors.css';

function SliderActors({ type = 'movies' }) {
    const { id } = useParams();
    const { cast } = useSelector(state => state.actors);
    const dispatch = useDispatch();

    // API fetch

    useEffect(() => {
        dispatch(fetchActors({ type, id }));
    }, [dispatch, id, type]);

    return (
        <section className="slider-actors" >
            <h2 className="slider-actors__title" >
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
                className="slider-actors__swiper"
            >
                {
                    cast.map(actor => {
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

export default SliderActors;