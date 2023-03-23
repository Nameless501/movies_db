import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import PagePoster from '../../UI/PagePoster/PagePoster';
import SliderActors from '../../modules/SliderActors/SliderActors';
import Description from '../../modules/Description/Description';
import SliderSimilarMovies from '../../modules/SliderSimilarMovies/SliderSimilarMovies';
import MovieReviews from '../../modules/MovieReviews/MovieReviews';
import './InfoPage.css';

function InfoPage({ type = 'movies' }) {
    const { info } = useSelector(store => store.info);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [info]);

    return (
        <div className='info-page' >
            <Header
                place='movies'
            />
            <main className='info-page__content'>
                <PagePoster
                    poster={info?.backdrop_path}
                />
                <div className='info-page__content-wrapper' >
                    <div className='info-page__card-wrapper' >
                        <Description type={type} />
                    </div>
                    <div className='info-page__actors-wrapper' >
                        <SliderActors type={type} />
                    </div>
                    <div className='info-page__similar-wrapper' >
                        <SliderSimilarMovies type={type} />
                    </div>
                    <div className='info-page__reviews-wrapper' >
                        <MovieReviews type={type} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default InfoPage;