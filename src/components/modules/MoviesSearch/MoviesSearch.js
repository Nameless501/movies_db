import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import './MoviesSearch.css';

function MoviesSearch({ initialState, handleSubmit }) {
    const { inputsValues, formIsValid, errorMessages, handleInputChange, handleToggleChange } = useFormStateAndValidation(initialState);

    function onSubmit(evt) {
        evt.preventDefault();

        if(formIsValid) {
            handleSubmit(inputsValues);
        }
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
                    isValid={formIsValid}
                    error={errorMessages.keyword}
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