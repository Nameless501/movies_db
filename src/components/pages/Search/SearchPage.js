import { useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreMovies, fetchMoreShows, findMovies, findShows, updateQuery } from '../../../store/search/searchSlice';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import MoviesFeed from '../../components/MoviesFeed/MoviesFeed';
import './SearchPage.css';

function SearchPage() {
    const scrollRef = useRef(0);
    const { result, loading, error, currentPage, totalPages, query } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    function handleLoadMore() {
        scrollRef.current = window.pageYOffset;

        if(query.tvShows) {
            dispatch(fetchMoreShows());
        } else {
            dispatch(fetchMoreMovies());
        }
    };

    function handleSubmit(inputsValues) {
        const { keyword, tvShows } = inputsValues;

        if(tvShows) {
            dispatch(findShows(keyword));
        } else {
            dispatch(findMovies(keyword));
        }

        dispatch(updateQuery(inputsValues));

        scrollRef.current = 0;
    };

    useLayoutEffect(() => {
        window.scrollTo(0, scrollRef.current);
    }, [result]);

    return (
        <div className='search-page' >
            <Header
                place='search'
            />
            <main className='search-page__content' >
                <MoviesSearch
                    initialState={query}
                    handleSubmit={handleSubmit}
                />
                <MoviesFeed
                    movies={result}
                    loading={loading}
                    error={error}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleLoadMore={handleLoadMore}
                />
            </main>
            <Footer />
        </div>
    );
}

export default SearchPage;