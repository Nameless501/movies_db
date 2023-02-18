import TextInput from '../../UI/TextInput/TextInput';
import SearchButton from '../../UI/SearchButton/SearchButton';
import './SearchInput.css';

function SearchInput({ value, handleChange }) {
    return (
        <fieldset className='search-input' >
            <TextInput
                place='search'
                name='keyword'
                placeholder='Фильм'
                required={true}
                value={value}
                handleChange={handleChange}
            />
            <SearchButton />
        </fieldset>
    );
}

export default SearchInput;