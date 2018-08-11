import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';

const layout = (props) => (

    <Aux>
        <div>Toolbar, sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
        <div>Footer</div>
    </Aux>
);

export default layout;