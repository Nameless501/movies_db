import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import PagePoster from '../../UI/PagePoster/PagePoster';
import PageTitle from '../../UI/PageTitle/PageTitle';
import './MoviesPageWrapper.css';

function MoviesPageWrapper({ title, poster, children }) {
    return (
        <div className='movies-page' >
            <Header
                place='movies'
            />
            <main className='movies-page__content'>
                <PagePoster
                    poster={poster}
                />
                <div className='movies-page__content-wrapper' >
                    <PageTitle
                        title={title}
                    />
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MoviesPageWrapper;