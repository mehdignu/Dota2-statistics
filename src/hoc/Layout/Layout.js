import React from 'react';
import classes from './Layout.css';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (

    <Aux>

        <Toolbar/>

        <main className={classes.Content}>
            {props.children}
        </main>

        <div>Footer</div>

    </Aux>
);

export default layout;