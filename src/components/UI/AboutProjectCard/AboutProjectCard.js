import './AboutProjectCard.css';

function AboutProjectCard({ title, text }) {
    return (
        <article className='about-project-card' >
            <h3 className='about-project-card__title' >
                {title}
            </h3>
            <p className='about-project-card__text' >
                {text}
            </p>
        </article>
    );
}

export default AboutProjectCard;