import React from 'react';
import logoComp from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => {
    <div className={classes.Logo}>
        <img src={logoComp} alt="DotaStats" />
    </div>
};

export default logo;