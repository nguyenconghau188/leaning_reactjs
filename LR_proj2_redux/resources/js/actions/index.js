import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';

export const actFecthProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null)
                .then((response) => {
                    dispatch(actFecthProducts(response.data.data.data));
                });
    }
}

export const actFecthProducts = () => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}
