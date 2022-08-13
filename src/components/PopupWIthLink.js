import React from 'react';
import {useHistory} from 'react-router-dom';

function PopupWithLink({isOpen, onClose, formTitle, buttonText}) {
    const history = useHistory();

    function handleClose() {
        onClose()
        history.goBack()
    }

    return (
        <>
            <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">

                    <div className="popup__form">
                        <h3 className="text3">{formTitle}</h3>

                        <button type="submit"
                                className="button button__save"
                                onClick={handleClose}>{buttonText}  </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PopupWithLink;
