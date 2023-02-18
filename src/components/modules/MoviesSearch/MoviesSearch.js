import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFormStateAndValidation from '../../../hooks/useFormStateAndValidation';
import SearchInput from '../../components/SearchInput/SearchInput';
import ToggleInput from '../../UI/ToggleInput/ToggleInput';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './MoviesSearch.css';

function MoviesSearch({ action }) {
    const { inputsValues, handleInputChange, handleToggleChange } = useFormStateAndValidation({ shortfilms: true });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(action(inputsValues));
    }, [inputsValues, dispatch, action]);

    return (
        <section className='movies-search' >
            <form
                className='movies-search__form'
                noValidate
            >
                <SearchInput
                    value={inputsValues.keyword}
                    handleChange={handleInputChange}
                />
                <ToggleInput
                    name='shortfilms'
                    id='shortfilms-selector'
                    title='Короткометражки'
                    handleChange={handleToggleChange}
                    checked={inputsValues.shortfilms}
                />
            </form>
        </section>
    );
}

export default MoviesSearch;