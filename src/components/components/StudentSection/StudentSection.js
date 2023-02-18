import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import StudentInfo from '../../UI/StudentInfo/StudentInfo';
import StudentPhoto from '../../UI/StudentPhoto/StudentPhoto';
import Link from '../../UI/Link/Link';
import PortfolioLinksList from '../PortfolioLinksList/PortfolioLinksList';
import './StudentSection.css';

function StudentSection() {
    return (
        <section className='student' >
            <SectionTitle
                text='Студент'
            />
            <div className='student__profile-wrapper' >
                <div className='student__profile-info-wrapper' >
                    <StudentInfo />
                    <Link
                        href='https://github.com/Nameless501'
                        text='GitHub'
                    />
                </div>
                <StudentPhoto />
            </div>
            <div className='student__portfolio-wrapper' >
                <h3 className='student__portfolio-title' >
                    Портфолио
                </h3>
                <PortfolioLinksList />
            </div>
        </section>
    );
}

export default StudentSection;