import React, {Component} from 'react';
import Layout from '../../hoc/Layout/Layout';
import Profile from '../../components/Stats/Profile/Profile';
import * as actiontypes from "../../store/actions";
import {connect} from "react-redux";
import * as params from '../../params';
import Aux from '../../hoc/Aux/Aux';
import {NavLink} from 'react-router-dom';

class result extends Component {

    componentDidMount() {


        const searchTerm = this.props.search;

        //search for suggestions of the searched player
        fetch(params.SEARCH + searchTerm)

            .then(response => {

                    response.json().then(json => {

                        this.props.onSearchForSuggestions(json);
                        console.log(json)
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

        let key = 0;
        //map through the persons date and list them after filtering
        const persons = this.props.suggestions

        //map the result into a list of detail links
        .map(person => {


            return (

                <Aux key={key++}>
                    <li>
                        <NavLink exact
                                 to={{pathname: '/#' + person.account_id}}
                                 onClick={() => this.props.onShowPerson(person)}>

                            <Profile name={person.personaname}/>

                        </NavLink>
                    </li>
                </Aux>
            );

        });

        return (
            <Aux>
                {persons}
            </Aux>
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
        onSearchForSuggestions: (suggestionsData) => dispatch({type: actiontypes.SUGGESTIONS_SEARCH, suggestionsData: suggestionsData})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(result);
