import * as actionTypes from './actions';

const initialState = {
    name: '',
    selectedPerson: '',
    suggestions: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.SEARCH_TERM:
            return {
                ...state,
                name: action.name
            };

        case actionTypes.SUGGESTIONS_SEARCH:

            return {
                ...state,
                suggestions: action.suggestionsData
            };

        case actionTypes.SHOW_PERSON:

            return {
                ...state,
                selectedPerson: action.selectedPerson
            };

        default:
            return state;
    }
};

export default reducer;