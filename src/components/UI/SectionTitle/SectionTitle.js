import './SectionTitle.css';

function SectionTitle({ text }) {
    return (
        <h3 className='section-title'>
            {text}
        </h3>
    );
}

export default SectionTitle;