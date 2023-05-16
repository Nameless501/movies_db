import { Link } from "react-router-dom";
import PreloaderSmall from "../../UI/PreloaderSmall/PreloaderSmall";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import "./SliderSmallWrapper.css";

function SliderSmallWrapper({ title, link, loading, error, children }) {
  return (
    <section className="slider-small-wrapper">
      {link ? (
        <Link to={link} className="slider-small-wrapper__link">
          <h2 className="slider-small-wrapper__title">{title}</h2>
        </Link>
      ) : (
        <h2 className="slider-small-wrapper__title">{title}</h2>
      )}
      {loading === "pending" && <PreloaderSmall place="slider-small" />}
      {loading === "rejected" && (
        <ErrorMessage text={error} place="slider-small" />
      )}
      {loading === "fulfilled" && children}
    </section>
  );
}

export default SliderSmallWrapper;
