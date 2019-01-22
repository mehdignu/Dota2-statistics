import React, {Component} from 'react';
import * as actiontypes from "../../../store/actions";
import {connect} from "react-redux";
import * as params from '../../../params';
import classes from './Profile.scss';

class Profile extends Component {

    state = {

        account: [],
        win: null,
        loss: null
    };


    async componentDidMount() {


        //fetch the win/rate and account informations of the selected player
        const profileID = this.props.selectedPerson;

        try {
            let [fetchedAccount, fetchedwl] = await Promise.all([
                fetch(params.ACCOUNT + profileID)
                    .then(response => {

                            response.json().then(json => {

                                this.setState({account: json});
                            })

                        }
                    ),

                fetch(params.ACCOUNT + profileID + '/wl')
                    .then(response => {

                            response.json().then(json => {

                                this.setState({win: json.win});
                                this.setState({loss: json.loss});

                            })

                        }
                    )
            ]);


        } catch (err) {
            console.log(err);
        }


    }


    render() {

        return (
            <div>
                {this.state.win}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //search term
        search: state.name,
        suggestions: state.suggestions,
        selectedPerson: state.selectedPerson
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
