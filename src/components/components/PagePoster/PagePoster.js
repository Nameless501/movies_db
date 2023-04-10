import PosterLazyLoad from '../../components/PosterLazyLoad/PosterLazyLoad';
import './PagePoster.css';

function PagePoster({ posterHorizontal, posterVertical }) {
    return (
        <div
            className='page-poster'
        >
            <PosterLazyLoad
                posterHorizontal={posterHorizontal}
                posterVertical={posterVertical}
                place='feed'
            />
        </div>
    );
}

export default PagePoster;
