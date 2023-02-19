import Header from '../../modules/Header/Header';
import SliderMain from '../../modules/SliderMain/SliderMain';
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
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;