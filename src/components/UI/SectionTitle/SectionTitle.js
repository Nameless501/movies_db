import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import './SectionTitle.css';

function SectionTitle({ text, link }) {
    const styles = {
        background: `linear-gradient(transparent, var(--colors_bg_main)), url(${POSTER_HORIZONTAL_ORIGINAL + link})`
    }

    return (
        <div
            className='section-title'
            style={styles}
        >
            <h3 className='section-title__text'>
                {text}
            </h3>
        </div>
    );
}

export default SectionTitle;