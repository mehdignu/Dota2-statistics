import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Logo</div>
        <div>Search</div>

        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;