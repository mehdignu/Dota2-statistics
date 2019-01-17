import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import DotaStats from '../DotaStats/DotaStats';
import Profile from '../../components/Stats/Profile/Profile';
import * as actiontypes from "../../store/actions";
import {connect} from "react-redux";
import * as params from '../../params';


class result extends Component {

    componentDidMount() {


        const searchTerm = this.props.search;

        //search for suggestions of the searched player
        fetch(params.SEARCH + searchTerm)

            .then(response => {

                    response.json().then(json => {

                        this.props.onSearchForSuggestions(json);
                    })

                }
            )

            .catch((error) => {
                console.log(error)
            });

    }


    render() {


        if (this.props.suggestions.length === 0) {

            return (

                <div />
            );
        }

        console.log(this.props.suggestions);

        return (
            <Layout>
                <Profile/>
            </Layout>
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
        onSearchForSuggestions: (suggestionsData) => dispatch({type: actiontypes.SUGGESTIONS_SEARCH, suggestionsData: suggestionsData})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(result);
