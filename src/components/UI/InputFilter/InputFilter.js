import React from 'react';
import classes from './Input.scss';

const InputFilter = (props) => {

    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input onChange={props.onUpdate} className={classes.input}  {...props} />;
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