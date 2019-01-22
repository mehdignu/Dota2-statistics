import React, {Component} from 'react';
import * as actiontypes from "../../../store/actions";
import {connect} from "react-redux";
import * as params from '../../../params';
import {NavLink} from 'react-router-dom';
import classes from './Profile.scss';

class Profile extends Component {

    componentDidMount() {


    }


    render() {


        return (
            <div>
                profile
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
