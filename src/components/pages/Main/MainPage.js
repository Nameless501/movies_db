import Header from '../../modules/Header/Header';
import SliderMain from '../../modules/SliderMain/SliderMain';
import TopRatedSlider from '../../modules/TopRatedSlider/TopRatedSlider';
import NowPlayingSlider from '../../modules/NowPlayingSlider/NowPlayingSlider';
import Footer from '../../components/Footer/Footer';
import './MainPage.css';

function MainPage() {
    return (
        <div className='main-page'>
            <Header
                place='main-page'
            />
            <main className='main-page__content'>
                <SliderMain />
                <div className='main-page__content-wrapper' >
                    <TopRatedSlider type='movies' />
                    <NowPlayingSlider type='movies' />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;