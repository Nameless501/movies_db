import Header from '../../modules/Header/Header';
import SliderMain from '../../modules/SliderMain/SliderMain';
import SliderTopRated from '../../modules/SliderTopRated/SliderTopRated';
import Footer from '../../components/Footer/Footer';
import './MainPage.css';
import SliderNowPlaying from '../../modules/SliderNowPlaying/SliderNowPlaying';

function MainPage() {
    return (
        <div className='main-page'>
            <Header
                place='main-page'
            />
            <main className='main-page__content'>
                <SliderMain />
                <div className='main-page__content-wrapper' >
                    <SliderTopRated type='movies' />
                    <SliderNowPlaying type='movies' />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;