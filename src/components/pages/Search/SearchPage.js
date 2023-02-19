import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import FindedMovies from '../../modules/FindedMovies/FindedMovies';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className='search-page' >
            <Header />
            <main className='search-page__content' >
                <MoviesSearch
                    action={() => ''}
                />
                <FindedMovies />
            </main>
            <Footer />
        </div>
    );
}

export default SearchPage;