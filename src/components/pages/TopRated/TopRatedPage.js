import { useSelector } from 'react-redux';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import TopRatedMovies from '../../modules/TopRatedMovies/TopRatedMovies';
import './TopRatedPage.css';

function TopRatedPage() {
    const { movies } = useSelector(store => store.movies);

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='top-page' >
            <Header
                place='movies'
            />
            <main className='top-page__content'>
                <SectionTitle
                    text='Популярные фильмы'
                    link={movies[getRandom(19)]?.backdrop_path}
                />
                <TopRatedMovies />
            </main>
            <Footer />
        </div>
    );
}

export default TopRatedPage;