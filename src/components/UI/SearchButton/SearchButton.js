import './SearchButton.css';

function SearchButton({ disabled = false }) {
    return (
        <button
            className='search-button'
            type='submit'
            disabled={disabled}
        >
        </button>
    );
}

export default SearchButton;