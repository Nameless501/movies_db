import './SearchButton.css';

function SearchButton({ handleClick, disabled = true }) {
    return (
        <button
            className='search-button'
            type='button'
            onChange={handleClick}
            disabled={disabled}
        >
        </button>
    );
}

export default SearchButton;