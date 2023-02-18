import './MoviesListWrapper.css';

function MoviesListWrapper({ children }) {
    return (
        <ul className='movies-list-wrapper' >
            {children}
        </ul>
    );
}

export default MoviesListWrapper;