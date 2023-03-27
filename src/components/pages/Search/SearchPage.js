import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchQuery, fetchNextPage, updateQuery } from '../../../store/search/searchSlice';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../modules/SearchForm/SearchForm';
import CardsFeed from '../../components/CardsFeed/CardsFeed';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SearchPage.css';

function SearchPage() {
    const { result, loading, error, currentPage, totalPages, query } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    function handleLoadMore() {;
        dispatch(fetchNextPage());
    };

    function handleSubmit(inputsValues) {
        const { keyword, tvShows } = inputsValues;
        const type = tvShows ? 'shows' : 'movies';

        dispatch(fetchSearchQuery({ type, keyword }));
        dispatch(updateQuery(inputsValues));

        window.scrollTo(0, 0);
    };

    return (
        <div className='search-page' >
            <Header
                place='search'
            />
            <main className='search-page__content' >
                <SearchForm
                    initialState={query}
                    handleSubmit={handleSubmit}
                />
                {
                    (!error && result.length > 0) &&
                        <CardsFeed
                            movies={result}
                            loading={loading}
                            error={error}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            handleLoadMore={handleLoadMore}
                            type={query.type}
                        />
                }
                {
                    (error && result.length === 0) &&
                        <ErrorMessage
                            text={error}
                            place='movies'
                        />
                }
            </main>
            <Footer />
        </div>
    );
}

export default SearchPage;