import React from 'react';

function PopupWithoutInputs({card, handleSubmit, isOpen, onClose, formName, formTitle, buttonText}) {

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(card);
    };

    return (
        <>
            <div className={`popup  ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button type="button" className="button button__close" onClick={onClose}></button>
                    <form onSubmit={onSubmit} name={formName} action="#" method="post" className="popup__form"
                          noValidate>
                        <h3 className="text3">{formTitle}</h3>

                        <button type="submit"
                                className="button button__save">{buttonText}  </button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default PopupWithoutInputs;
