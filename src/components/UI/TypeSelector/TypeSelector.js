import './TypeSelector.css';

function TypeSelector({ handleChange, type }) {
    return (
        <div className='type-selector' >
            <input
                type='radio'
                name='type'
                id='movie'
                className='type-selector__input'
                checked={type === 'movie'}
                value='movie'
                onChange={handleChange}
            />
            <label
                htmlFor='movie'
                className='type-selector__label'
            >
                Фильмы
            </label>
            <input
                type='radio'
                name='type'
                id='tv'
                className='type-selector__input'
                checked={type === 'tv'}
                value='tv'
                onChange={handleChange}
            />
            <label
                htmlFor='tv'
                className='type-selector__label'
            >
                Сериалы
            </label>
            <span className='type-selector__slider' />
        </div>
    );
}

export default TypeSelector;