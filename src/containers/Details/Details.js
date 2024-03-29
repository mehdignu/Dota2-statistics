import React, {Component} from 'react';
import classes from './Details.scss';
import Profile from './Profile/Profile';
import * as params from '../../params';
import * as actiontypes from "../../store/actions";
import {connect} from "react-redux";

class Details extends Component {

    componentDidMount() {


    }


    render() {


        return (
            <div className={classes["details"]}>
                <Profile/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //search term
        search: state.name,
        suggestions: state.suggestions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onShowPerson: (selectedPerson) => dispatch({type: actiontypes.SHOW_PERSON, loadedPerson: selectedPerson}),
        onSearchForSuggestions: (suggestionsData) => dispatch({
            type: actiontypes.SUGGESTIONS_SEARCH,
            suggestionsData: suggestionsData
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

