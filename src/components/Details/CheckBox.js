import React from 'react';

export default function Checkbox({onCheckboxChange, name, value, checked}) {
    return (
        <li className="editor__checkbox_item">
            <input
                className="editor__checkbox_input"
                type="checkbox"
                name={name}
                checked={checked}
                value={value}
                onChange={onCheckboxChange}/>
            <label className="text editor__checkbox_item ">{name}</label>
        </li>
    )
}



