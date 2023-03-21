import TextInput from '../../UI/TextInput/TextInput';
import SearchButton from '../../UI/SearchButton/SearchButton';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './SearchInput.css';

function SearchInput({ value, handleChange, isValid, error }) {
    return (
        <fieldset className='search-input' >
            {
                error &&
                    <ErrorMessage
                        place='movies-search'
                        text={error}
                    />
            }
            <TextInput
                place='search'
                name='keyword'
                placeholder='Фильм'
                required={true}
                value={value}
                handleChange={handleChange}
            />
            <SearchButton
                disabled={!isValid}
            />
        </fieldset>
    );
}

export default SearchInput;