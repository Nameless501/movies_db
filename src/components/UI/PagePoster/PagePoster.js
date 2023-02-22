import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import './PagePoster.css';

function PagePoster({ poster }) {
    const styles = {
        '--image_url': `url(${POSTER_HORIZONTAL_ORIGINAL + poster})`
    }

    return (
        <div
            className='page-poster'
            style={styles}
        />
    );
}

export default PagePoster;
