import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopular } from "../../../store/popular/popularSlice";
import { routesConfig } from "../../../utils/configs";
import SliderSmall from "../../components/SliderSmall/SliderSmall";
import SliderSmallWrapper from "../../components/SliderSmallWrapper/SliderSmallWrapper";

function PopularSlider({ type }) {
  const { results, loading, error } = useSelector(
    (state) => state.popular[type]
  );
  const dispatch = useDispatch();

  // API fetch

  useEffect(() => {
    dispatch(fetchPopular(type));
  }, [dispatch, type]);

  return (
    <SliderSmallWrapper
      title={type === "movie" ? "Популярные фильмы" : "Популяные сериалы"}
      link={routesConfig[type].popular}
      loading={loading}
      error={error}
    >
      <SliderSmall movies={results} type={type} />
    </SliderSmallWrapper>
  );
}

export default PopularSlider;
