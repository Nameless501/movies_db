import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInfo } from "../../../store/info/infoSlice";
import PosterImage from "../../components/PosterImage/PosterImage";
import CardButtons from "../CardButtons/CardButtons";
import PreloaderSmall from "../../UI/PreloaderSmall/PreloaderSmall";
import "./Description.css";

function Description({ type }) {
  const { id } = useParams();
  const { info, loading } = useSelector((store) => store.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInfo({ type, id }));
  }, [dispatch, id, type]);

  return (
    <div className="description">
      <PosterImage src={info?.poster_path} place="description" />
      {loading === "fulfilled" && (
        <>
          <h2 className="description__title">
            {type === "movie" &&
              `${info?.title} ${
                info?.release_date &&
                "(" + new Date(info?.release_date).getFullYear() + ")"
              }`}
            {type === "tv" &&
              `${info?.name} ${
                info?.first_air_date &&
                "(" + new Date(info?.first_air_date).getFullYear() + ")"
              }`}
          </h2>
          <div className="description__subtitle">
            <p className="description__text-fade">
              {type === "movie" &&
                info?.runtime?.toLocaleString("ru", {
                  style: "unit",
                  unit: "minute",
                  unitDisplay: "long",
                })}
              {type === "tv" && "Сезонов: " + info?.number_of_seasons}
            </p>
            <ul className="description__genres">
              {info?.genres?.map((genre) => {
                return (
                  <li key={genre.id}>
                    <p className="description__genre">{genre.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="description__description">
            {info?.overview
              ? info?.overview
              : "Кажется описание пока не добавили"}
          </p>
        </>
      )}
      {loading === "pending" && (
        <div className="description__preloader">
          <PreloaderSmall place="description" />
        </div>
      )}
      <CardButtons place="description" id={id} type={type} />
    </div>
  );
}

export default Description;
