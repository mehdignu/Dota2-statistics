import React, {Component} from 'react';
import * as actiontypes from "../../store/actions";
import {connect} from "react-redux";
import * as params from '../../params';
import {NavLink} from 'react-router-dom';
import classes from './Result.scss';

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

                <div/>
            );
        }

        let key = 0;
        //map through the persons date and list them after filtering
        const persons = this.props.suggestions

        //map the result into a list of detail links
            .map(person => {


                return (

                    <div key={key++} className={classes["result-item"]}>
                        <li>

                            <NavLink exact
                                     to={{pathname: '/#' + person.account_id}}
                                     onClick={() => this.props.onShowPerson(person.account_id)}>


                                <img src={person.avatarfull} alt="Logo" className={classes["result-content__image"]}/>

                                <div className={classes["result-content__info"]}>

                                    <div className={classes["result-content__info--name"]}>
                                        <b>Name </b>: {person.personaname}</div>
                                    <br/>

                                    <div className={classes["result-content__info--account"]}><b>Account
                                        ID </b> : {person.account_id}</div>
                                    <br/>

                                    <div className={classes["result-content__info--last-match"]}><b>last match
                                        time </b>: {person.last_match_time}</div>
                                    <br/>
                                </div>
                            </NavLink>
                        </li>

                    </div>
                );

            });

        return (
            <div className={classes["result-content"]}>
                {persons}
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
        onShowPerson: (selectedPerson) => dispatch({type: actiontypes.SHOW_PERSON, selectedPerson: selectedPerson}),
        onSearchForSuggestions: (suggestionsData) => dispatch({
            type: actiontypes.SUGGESTIONS_SEARCH,
            suggestionsData: suggestionsData
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(result);
