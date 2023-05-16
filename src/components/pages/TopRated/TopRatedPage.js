import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTopRated,
  fetchMoreTopRated,
} from "../../../store/topRated/topRatedSlice";
import CardsFeed from "../../components/CardsFeed/CardsFeed";
import FeedPageWrapper from "../../components/FeedPageWrapper/FeedPageWrapper";
import { getRandomElement } from "../../../utils/utils";

function TopRatedPage({ title, type }) {
  const { results, loading, error, currentPage, totalPages } = useSelector(
    (state) => state.topRated[type]
  );
  const dispatch = useDispatch();

  // API fetch

  useEffect(() => {
    dispatch(fetchTopRated(type));
  }, [dispatch, type]);

  function handleLoadMore() {
    dispatch(fetchMoreTopRated(type));
  }

  return (
    <FeedPageWrapper
      title={title}
      posterHorizontal={getRandomElement(results)?.backdrop_path}
      posterVertical={getRandomElement(results)?.poster_path}
    >
      <CardsFeed
        movies={results}
        loading={loading}
        error={error}
        currentPage={currentPage}
        totalPages={totalPages}
        handleLoadMore={handleLoadMore}
        type={type}
      />
    </FeedPageWrapper>
  );
}

export default TopRatedPage;
