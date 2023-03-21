import './SearchButton.css';

function SearchButton({ handleClick, disabled = false }) {
    return (
        <button
            className='search-button'
            type='submit'
            onChange={handleClick}
            disabled={disabled}
        >
        </button>
    );
}

export default SearchButton;