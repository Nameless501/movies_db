import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch({ initialState, handleSubmit }) {
    const { inputsValues, handleInputChange, handleToggleChange } = useFormStateAndValidation(initialState);

    function onSubmit(evt) {
        evt.preventDefault();
        handleSubmit(inputsValues);
    };

    return (
        <section className='movies-search' >
            <form
                className='movies-search__form'
                noValidate
                onSubmit={onSubmit}
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