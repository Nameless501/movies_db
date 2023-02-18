import PopupWrapper from '../PopupWrapper/PopupWrapper';
import CloseButton from '../../UI/CloseButton/CloseButton';
import './InfoTooltip.css';

function InfoTooltip({ handleClose }) {
    return (
        <PopupWrapper
            handleClose={handleClose}
        >
            <div
                className='info-tooltip'
            >
                <CloseButton
                    place='tooltip'
                    handleClick={handleClose}
                />
            </div>
        </PopupWrapper>
    );
}

export default InfoTooltip;