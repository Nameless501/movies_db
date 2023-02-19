import { POSTER_HORIZONTAL_ORIGINAL } from '../../../utils/constants';
import './SectionTitle.css';

function SectionTitle({ text, link }) {
    return (
        <div
            className='section-title'
            style={{backgroundImage: `url(${POSTER_HORIZONTAL_ORIGINAL + link})`}}
        >
            <h3 className='section-title__text'>
                {text}
            </h3>
        </div>
    );
}

export default SectionTitle;