import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNowPlaying } from "../../../store/nowPlaying/nowPlayingSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useResize from "../../../hooks/useResize";
import SlideMain from "../../components/SlideMain/SlideMain";
import "./SliderMain.css";

function SliderMain({ type }) {
  const { results } = useSelector((state) => state.nowPlaying);
  const dispatch = useDispatch();
  const { isMobile } = useResize();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  return (
    <section className="slider-main">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={!isMobile}
        modules={[Navigation]}
        className="slider-main__swiper"
      >
        {results.slice(0, 5).map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <SlideMain {...movie} type={type} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default SliderMain;
