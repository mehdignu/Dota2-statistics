import React from 'react';
import classes from './InputFilter.css';

const InputFilter = (props) => {

    let inputElement = null;
    switch (props.inputtype) {
        case ('input'):
            inputElement = <input onChange={props.onUpdate} className={classes.inputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.onUpdate} className={classes.inputElement} {...props} />;
            break;
        default:
            inputElement = <input className={classes.inputElement} {...props} />;
            break;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default InputFilter;