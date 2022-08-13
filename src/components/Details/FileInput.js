import React from "react";

function FileInput({onImageChange, imagePreview}) {


    function handleChange(e) {
        e.preventDefault()
        onImageChange(e);
    }


    return (
        <>
            <label className="text_bold grid3">Изображение</label>
            <input className="editor__input grid4" id="file" type="file" name="file" accept="image"
                   onChange={handleChange}/>

            {imagePreview}

        </>

    );
}


export default FileInput;
