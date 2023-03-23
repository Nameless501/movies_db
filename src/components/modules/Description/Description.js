import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInfo } from '../../../store/info/infoSlice';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import MovieInfoButtons from '../../components/MovieInfoButtons/MovieInfoButtons';
import './Description.css';

function Description({ type = 'movies' }) {
    const { id } = useParams();
    const { info } = useSelector(store => store.info);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInfo({ type, id }));
    }, [dispatch, id, type]);

    return (
        <div className='description' >
            <img src={POSTER_VERTICAL_SMALL + info?.poster_path} alt='Постер фильма' className='description__poster' />
            <h2 className='description__title' >
                {`${info?.title} ${info?.release_date && '(' + new Date(info?.release_date).getFullYear() + ')'}`}
            </h2>
            <div className='description__subtitle' >
                <p className='description__text-fade'>
                    {info?.runtime?.toLocaleString('ru', { style: 'unit', unit: 'minute', unitDisplay: 'long' })}
                </p>
                <ul className='description__genres'>
                    {info?.genres?.map(genre => {
                        return (
                            <li key={genre.id}>
                                <p className='description__genre'>
                                    {genre.name}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <p className='description__description'>
                {info?.overview ? info?.overview : 'Кажется описание пока не добавили'}
            </p>
            <MovieInfoButtons
                place='description'
                id={id}
                type={type}
            />
        </div>
    );
}

export default Description;