import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import TypeSelector from '../../UI/TypeSelector/TypeSelector';
import './SearchForm.css';

function SearchForm({ initialState, handleSubmit }) {
    const { inputsValues, formIsValid, errorMessages, handleInputChange, handleRadioChange } = useFormStateAndValidation(initialState);

    function onSubmit(evt) {
        evt.preventDefault();

        if(formIsValid) {
            handleSubmit(inputsValues);
        }
    };

    return (
        <section className='search-form' >
            <form
                className='search-form__form'
                noValidate
                onSubmit={onSubmit}
            >
                <SearchInput
                    value={inputsValues.keyword}
                    handleChange={handleInputChange}
                    isValid={formIsValid}
                    error={errorMessages.keyword}
                    placeholder={inputsValues.type === 'tv' ? 'Название сериала' : 'Название фильма'}
                />
                <TypeSelector
                    handleChange={handleRadioChange}
                    type={inputsValues.type}
                />
            </form>
        </section>
    );
}

export default SearchForm;