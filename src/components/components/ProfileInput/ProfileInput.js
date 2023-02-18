import TextInput from '../../UI/TextInput/TextInput';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import './ProfileInput.css';

function ProfileInput(props) {
    return (
        <div className='profile-input' >
            <ErrorMessage
                text={props.error}
                place={`${props.place}-${props.name}`}
            />
            <label
                htmlFor={props.id}
                className='profile-input__label'
            >
                {props.label}
            </label>
            <TextInput {...props} />
        </div>
    );
}

export default ProfileInput;