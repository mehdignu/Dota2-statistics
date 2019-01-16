import React, {Component} from 'react';
import InputFilter from '../../components/UI/InputFilter/InputFilter';
import {connect} from 'react-redux';
import * as actiontypes from '../../store/actions';
import classes from './Search.css';
import Aux from '../../hoc/Aux/Aux';


class search extends Component {


    state = {
        name: ''
    };

    inputChangedHandler = (event) => {
        this.setState({name: event.target.value});
        this.props.onSearch(event.target.value);

    };

    handleSubmit = (event) => {
        this.props.history.push('/analytics');
        event.preventDefault();
    };

    render() {


        let form = (

            <form onSubmit={this.handleSubmit} className={classes["search-form"]}>
                <InputFilter inputtype="input" type="text" name="name"
                             placeholder="player name / accountID" onChange={this.inputChangedHandler}/>
            </form>
        );

        return (

            <Aux>
            <header className={classes.header}>


                <div className={classes["text-box"]}>


                    <div className={classes["text-box-content"]}>

                        <img src="https://via.placeholder.com/150" alt="Logo" className={classes.logo}/>

                        <h1 className={classes["heading-primary"]}>
                            <span className={classes["heading-primary--main"]}>Dota2 stats</span>
                            <span className={classes["heading-primary--sub"]}>Advanced analytics platform</span>

                        </h1>

                        {form}

                    </div>

                </div>


            </header>


                <footer className={classes.footer}>

                    boohoo

                </footer>

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (name) => dispatch({type: actiontypes.SEARCH, name: name})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(search);