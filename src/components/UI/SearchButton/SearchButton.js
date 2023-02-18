import './SearchButton.css';

function SearchButton({ handleClick }) {
    return (
        <button
            className='search-button'
            type='submit'
            onChange={handleClick}
        >
            <span className='search-button__icon-line' />
            <span className='search-button__icon-arrow' />
        </button>
    );
}

export default SearchButton;