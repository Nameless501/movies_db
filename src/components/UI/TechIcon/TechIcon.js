import './TechIcon.css';

function TechIcon({ text }) {
    return (
        <div className='technology-icon' >
            <span className='technology-icon__text' >
                {text}
            </span>
        </div>
    );
}

export default TechIcon;