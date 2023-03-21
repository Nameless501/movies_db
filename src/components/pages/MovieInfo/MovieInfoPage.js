import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../modules/Header/Header';
import Footer from '../../components/Footer/Footer';
import PagePoster from '../../UI/PagePoster/PagePoster';
import SliderActors from '../../modules/SliderActors/SliderActors';
import MovieInfoCard from '../../modules/MovieInfoCard/MovieInfoCard';
import SliderSimilarMovies from '../../modules/SliderSimilarMovies/SliderSimilarMovies';
import MovieReviews from '../../modules/MovieReviews/MovieReviews';
import './MovieInfoPage.css';

function MovieInfoPage() {
    const { movieData } = useSelector(store => store.movieInfo);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [movieData]);

    return (
        <div className='movie-info-page' >
            <Header
                place='movies'
            />
            <main className='movie-info-page__content'>
                <PagePoster
                    poster={movieData?.backdrop_path}
                />
                <div className='movie-info-page__content-wrapper' >
                    <div className='movie-info-page__card-wrapper' >
                        <MovieInfoCard />
                    </div>
                    <div className='movie-info-page__actors-wrapper' >
                        <SliderActors />
                    </div>
                    <div className='movie-info-page__similar-wrapper' >
                        <SliderSimilarMovies />
                    </div>
                    <div className='movie-info-page__reviews-wrapper' >
                        <MovieReviews />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MovieInfoPage;