import './ButtonTooltip.css';

function ButtonTooltip({ text, place, children }) {
    return (
        <div className='button-tooltip' >
            {children}
            <span
                className={`
                    button-tooltip__text ${ place && 'button-tooltip__text_place_' + place }
                `}
            >
                {text}
            </span>
        </div>
    );
}

export default ButtonTooltip;