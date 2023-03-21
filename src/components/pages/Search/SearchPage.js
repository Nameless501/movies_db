import { useSelector } from 'react-redux';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import MoviesList from '../../components/MoviesList/MoviesList';
import MoreButton from '../../UI/MoreButton/MoreButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SearchPage.css';

function SearchPage() {
    const { result, loading, error } = useSelector((state) => state.search);

    return (
        <div className='search-page' >
            <Header
                place='search'
            />
            <main className='search-page__content' >
                <MoviesSearch />
                <section className='movies'>
                    {(!loading && result.length > 0) &&
                        <>
                            <MoviesList
                                moviesList={result}
                                userMoviesList={[]}
                            />
                            {/* <MoreButton
                            handleClick={loadMoreMovies}
                        /> */}
                        </>
                    }
                    {(result.length === 0 && error) &&
                        <ErrorMessage
                            text={error}
                            place='movies'
                        />
                    }
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SearchPage;