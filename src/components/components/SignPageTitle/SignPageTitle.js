import LogoLink from '../LogoLink/LogoLink';
import './SignPageTitle.css';

function SignPageTitle({ text }) {
    return (
        <div className='sign-page-title' >
            <LogoLink />
            <h2 className='sign-page-title__text' >
                {text}
            </h2>
        </div>
    );
}

export default SignPageTitle;