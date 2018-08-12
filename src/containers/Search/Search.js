import React, {Component} from 'react';
import InputFilter from '../../components/UI/InputFilter/InputFilter';
import {connect} from 'react-redux';
import * as actiontypes from '../../store/actions';
import Aux from '../../hoc/Aux/Aux';

class search extends Component {


    state = {
        name: ''
    };

    inputChangedHandler = (event) => {
        this.setState({name: event.target.value});
    };

    handleSubmit = (event) => {
        this.props.onSeacrh(event.target.value);
        event.preventDefault();
    };

    render() {


        let form = (
            <form onSubmit={this.handleSubmit}>
                <InputFilter inputtype="input" type="text" name="name"
                             placeholder="player name / accountID" onChange={this.inputChangedHandler}/>
            </form>
        );

        return (
            <Aux>
                {form}
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