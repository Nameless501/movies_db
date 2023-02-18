import { filterMovies } from '../../../store/movies/moviesSlice';
import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch';
import Movies from '../../modules/Movies/Movies';
import './MoviesPage.css';

function MoviesPage() {
    return (
        <div className='movies-page' >
            <HeaderMain />
            <main className='movies-page__content' >
                <MoviesSearch
                    action={filterMovies}
                />
                <Movies />
            </main>
            <Footer />
        </div>
    );
}

export default MoviesPage;