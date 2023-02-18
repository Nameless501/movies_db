import './StudentInfo.css';

function StudentInfo() {
    return (
        <article className='student-info' >
            <h2 className='student-info__title' >
                Евгений
            </h2>
            <p className='student-info__subtitle' >
                Фронтенд-разработчик, 28 лет
            </p>
            <p className='student-info__text' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting.
            </p>
        </article>
    );
}

export default StudentInfo;