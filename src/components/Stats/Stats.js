import React from 'react';
import classes from './Stats.css';
import Profile from './Profile/Profile';

const stats = ( props ) => {
    return (
        <div className={classes.Stats}>
            <Profile/>
        </div>
    );
};

export default stats;