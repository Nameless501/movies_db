import './SignPageWrapper.css';

function SignUpPage({ children }) {
    return (
        <main className='sign-page'>
            <div className='sign-page__wrapper' >
                {children}
            </div>
        </main>
    );
}

export default SignUpPage;