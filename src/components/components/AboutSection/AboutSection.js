import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import AboutProjectCard from '../../UI/AboutProjectCard/AboutProjectCard';
import ProjectTimeline from '../../UI/ProjectTimeline/ProjectTimeline';
import './AboutSection.css';

function AboutSection() {
    return (
        <section className='about'>
            <SectionTitle
                text='О проекте'
            />
            <div className='about__info-cards' >
                <AboutProjectCard
                    title='Дипломный проект включал 5 этапов'
                    text='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
                />
                <AboutProjectCard
                    title='На выполнение диплома ушло 5 недель'
                    text='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
                />
            </div>
            <div className='about__timeline' >
                <ProjectTimeline />
            </div>
        </section>
    );
}

export default AboutSection;