import React from 'react';
import classes from './Input.css';

const input = (props) => {

    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input onChange={props.changed} className={classes.inputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} className={classes.inputElement} {...props} />;
            break;
        default:
            inputElement = <input onChange={props.changed} className={classes.inputElement} {...props} />;
            break;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;