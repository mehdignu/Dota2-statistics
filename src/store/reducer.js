import * as actionTypes from './actions';

const initialState = {
    name: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SEARCH:
            return {
                ...state,
                name: action.name
            };

        default:
            return state;
    }
};

export default reducer;