import { useSelector, useDispatch } from "react-redux";
import {
  fetchSearchQuery,
  fetchNextPage,
} from "../../../store/search/searchSlice";
import Header from "../../modules/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchForm from "../../modules/SearchForm/SearchForm";
import CardsFeed from "../../components/CardsFeed/CardsFeed";
import "./SearchPage.css";

function SearchPage() {
  const { result, loading, error, currentPage, totalPages, prev } = useSelector(
    (state) => state.search
  );
  const dispatch = useDispatch();

  function handleLoadMore() {
    dispatch(fetchNextPage());
  }

  function handleSubmit(inputsValues) {
    const { keyword, type } = inputsValues;

    dispatch(fetchSearchQuery({ type, keyword }));

    window.scrollTo(0, 0);
  }

  return (
    <div className="search-page">
      <Header place="search" />
      <main className="search-page__content">
        <SearchForm initialState={prev} handleSubmit={handleSubmit} />
        <CardsFeed
          movies={result}
          loading={loading}
          error={error}
          currentPage={currentPage}
          totalPages={totalPages}
          handleLoadMore={handleLoadMore}
          type={prev.type}
        />
      </main>
      <Footer />
    </div>
  );
}

export default SearchPage;
