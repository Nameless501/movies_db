import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import TechIcon from '../../UI/TechIcon/TechIcon';
import './TechSection.css';

function TechSection() {
    return (
        <section className='technologies'>
            <SectionTitle
                text='Технологии'
            />
            <h2 className='technologies__title' >
                7 технологий
            </h2>
            <p className='technologies__subtitle' >
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className='technologies__list' >
                {['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'].map((technology, index) => {
                    return (
                        <li key={index} >
                            <TechIcon
                                text={technology}
                            />
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default TechSection;