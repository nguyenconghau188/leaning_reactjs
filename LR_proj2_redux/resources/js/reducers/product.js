import * as Types from './../constants/ActionType';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products];
        default:
            return [...state];
    }
}

export default products;
