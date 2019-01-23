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
            <div className={classes["profile"]}>

                <img src="https://via.placeholder.com/150" alt="profile image" className={classes["profile__image"]}/>

                <div className={classes["profile__name"]}>boo</div>

                <div className={classes["profile__wl"]}>

                    <div className={classes["profile__wl--row"]}>

                        <h4 className={classes["profile__wl--cell"]}>win</h4>
                        <span>118</span>

                    </div>
                    <div className={classes["profile__wl--row"]}>
                        <h4 className={classes["profile__wl--cell"]}>loss</h4>
                        <span>18</span>
                    </div>
                    <div className={classes["profile__wl--row"]}>
                        <h4 className={classes["profile__wl--cell"]}>win rate</h4>
                        <span>48%</span>
                    </div>

                </div>


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
