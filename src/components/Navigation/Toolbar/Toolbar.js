import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Logo/>
        <div>Search</div>

        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;