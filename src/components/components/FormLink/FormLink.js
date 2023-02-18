import NavigationLink from '../../UI/NavigationLink/NavigationLink';
import './FormLink.css';

function FormLink({ text, linkText, to }) {
    return (
        <p className='form-link' >
            {text} &nbsp;
            <span>
                <NavigationLink
                    text={linkText}
                    to={to}
                    place='form'
                />
            </span>
        </p>
    );
}

export default FormLink;