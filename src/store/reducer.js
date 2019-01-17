import * as actionTypes from './actions';

const initialState = {
    name: '',
    suggestions: []
};

const reducer = (state = initialState, action) => {
    switch (action.type){
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

        default:
            return state;
    }
};

export default reducer;