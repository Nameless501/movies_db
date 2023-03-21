import { useDispatch } from 'react-redux';
import { findMovies, findShows } from '../../../store/search/searchSlice';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch() {
    const { inputsValues, handleInputChange, handleToggleChange } = useFormStateAndValidation({ tvShows: false });
    const dispatch = useDispatch();

    function handleSubmit(evt) {
        evt.preventDefault();
        const { keyword, tvShows } = inputsValues;

        if(tvShows) {
            dispatch(findShows(keyword));
        } else {
            dispatch(findMovies(keyword));
        }
    };

    return (
        <section className='movies-search' >
            <form
                className='movies-search__form'
                noValidate
                onSubmit={handleSubmit}
            >
                <SearchInput
                    value={inputsValues.keyword}
                    handleChange={handleInputChange}
                />
                <ToggleInput
                    name='tvShows'
                    id='tvShows-selector'
                    title={inputsValues.tvShows ? 'Сериалы' : 'Фильмы'}
                    handleChange={handleToggleChange}
                    checked={inputsValues.tvShows}
                />
            </form>
        </section>
    );
}

export default MoviesSearch;