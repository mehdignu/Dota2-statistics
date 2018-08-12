import React, {Component} from 'react';
import Input from '../../components/UI/Input/Input';
import {connect} from 'react-redux';
import * as actiontypes from '../../store/actions';

class search extends Component {


    state = {
        name: ''
    };

    inputChangedHandler = (event) => {
    };


    render() {


        let form = (
            <form>
                <Input inputtype="input" type="text" name="name"
                       placeholder="player name / accountID" changed={() => this.inputChangedHandler()}/>;
            </form>
        );

        return (
            <div>
                {form}
            </div>
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