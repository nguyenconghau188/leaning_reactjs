import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data : [];
var initialState = [
    {
        product: {
            id: 1,
            name: 'IPhone Xs',
            image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
            description: 'Sản phẩm do Apple sản xuất',
            price: 1000,
            inventory: 10,
            rating: 5
        },
        quantity: 5
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
    
        default:
            return [...state];
    }
}

export default cart;