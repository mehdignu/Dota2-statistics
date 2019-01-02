import React from 'react';
import logoComp from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src="https://via.placeholder.com/150" alt="DotaStats" />
    </div>
);

export default logo;