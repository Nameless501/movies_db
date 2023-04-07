import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchInfo } from '../../../store/info/infoSlice';
import useImageLoad from '../../../hooks/useImageLoad';
import { POSTER_VERTICAL_SMALL } from '../../../utils/constants';
import CardButtons from '../../components/CardButtons/CardButtons';
import PreloaderSmall from '../../UI/PreloaderSmall/PreloaderSmall';
import './Description.css';

function Description({ type = 'movies' }) {
    const { id } = useParams();
    const { info, loading } = useSelector(store => store.info);
    const { imageState, checkImageLoading } = useImageLoad();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInfo({ type, id }));
    }, [dispatch, id, type]);

    return (
        <div className='description' >
            <div className='description__poster-wrapper'>
                <img
                    src={POSTER_VERTICAL_SMALL + info?.poster_path}
                    alt='Постер фильма'
                    className={`
                        description__poster
                        ${ imageState === 'loaded' && 'description__poster_loaded' }
                    `}
                    onLoad={checkImageLoading}
                />
            </div>
            {
                loading === 'fulfilled' ?
                    <>
                        <h2 className='description__title' >
                            {type === 'movies' && `${info?.title} ${info?.release_date && '(' + new Date(info?.release_date).getFullYear() + ')'}`}
                            {type === 'shows' && `${info?.name} ${info?.first_air_date && '(' + new Date(info?.first_air_date).getFullYear() + ')'}`}
                        </h2>
                        <div className='description__subtitle' >
                            <p className='description__text-fade'>
                                {type === 'movies' && info?.runtime?.toLocaleString('ru', { style: 'unit', unit: 'minute', unitDisplay: 'long' })}
                                {type === 'shows' && 'Сезонов: ' + info?.number_of_seasons}
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
                    </>
                    :
                    <div className='description__preloader' >
                        <PreloaderSmall />
                    </div>
            }
            <CardButtons
                place='description'
                id={id}
                type={type}
            />
        </div>
    );
}

export default Description;