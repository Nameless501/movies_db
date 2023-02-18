import HeaderMain from '../../modules/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';
import TopRatedMovies from '../../modules/TopRatedMovies/TopRatedMovies';
import './TopRatedPage.css';

function TopRatedPage() {
    return (
        <div className='top-page' >
            <HeaderMain />
            <main className='top-page__content' >
                <TopRatedMovies />
            </main>
            <Footer />
        </div>
    );
}

export default TopRatedPage;