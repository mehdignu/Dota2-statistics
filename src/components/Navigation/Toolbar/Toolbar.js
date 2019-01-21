import React from 'react';
import classes from './Toolbar.scss';

const toolbar = (props) => (


    <nav className={classes["user-nav"]}>


        <div className="row">

            <div className="col-1-of-3">
                <div className={classes["user-nav__logoside"]}>

                    <img src="https://via.placeholder.com/150" alt="Logo" className={classes["user-nav__logoside--logo"]}/>

                    <div className={classes["user-nav__logoside--home"]}>Dota-stats</div>

                </div>
            </div>

            <div className="col-1-of-3">

                <input className={classes["user-nav__search-box"]}/>

            </div>

            <div className="col-1-of-3">

                <div className={classes["user-nav__ads"]}>

                   boohoo

                </div>

            </div>

        </div>

    </nav>


);

export default toolbar;