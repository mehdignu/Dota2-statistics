import React from 'react';

const InputFilter = (props) => {

    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input onChange={props.onUpdate}  {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.onUpdate}  {...props} />;
            break;
        default:
            inputElement = <input  {...props} />;
            break;

    }

    return (
        <div >
            <label >{props.label}</label>
            {inputElement}
        </div>
    );
};

export default InputFilter;