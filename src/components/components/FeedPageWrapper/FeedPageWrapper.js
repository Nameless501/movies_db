import Header from '../../modules/Header/Header';
import Footer from '../Footer/Footer';
import PagePoster from '../../UI/PagePoster/PagePoster';
import PageTitle from '../../UI/PageTitle/PageTitle';
import './FeedPageWrapper.css';

function FeedPageWrapper({ title, poster, children }) {
    return (
        <div className='feed-page' >
            <Header
                place='movies'
            />
            <main className='feed-page__content'>
                <PagePoster
                    poster={poster}
                />
                <div className='feed-page__content-wrapper' >
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

export default FeedPageWrapper;