import { useRef } from "react";
import useResize from "../../../hooks/useResize";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import CardsList from "../CardsList/CardsList";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import Preloader from "../../UI/Preloader/Preloader";
import PreloaderSmall from "../../UI/PreloaderSmall/PreloaderSmall";
import "./CardsFeed.css";

function CardsFeed({
  movies,
  loading,
  error,
  handleLoadMore,
  currentPage,
  totalPages,
  type,
}) {
  const listEndRef = useRef();
  const { isDesktop, isTablet } = useResize();

  const columnsCount = isDesktop ? 5 : isTablet ? 4 : 2;

  useIntersectionObserver(
    listEndRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && loading !== "pendingNextPage") {
        handleLoadMore();
      }
    },
    "0px",
    0.5
  );

  return (
    <section className="cards-feed">
      {(loading === "fulfilled" || loading === "pendingNextPage") && (
        <div className="cards-feed__movies-list">
          <CardsList moviesList={movies} type={type} />
        </div>
      )}
      {(loading === "fulfilled" || loading === "pendingNextPage") &&
        currentPage < totalPages && (
          <div
            className="cards-feed__more-button"
            style={{
              height: `${100 / (movies.length / columnsCount)}%`,
            }} // get dynamic size of last row in %
            ref={listEndRef}
          >
            {loading !== "rejected" && <PreloaderSmall place="cards-feed" />}
          </div>
        )}
      {loading === "rejected" && <ErrorMessage text={error} place="movies" />}
      {loading === "pending" && (
        <div className="cards-feed__preloader">
          <Preloader />
        </div>
      )}
    </section>
  );
}

export default CardsFeed;
