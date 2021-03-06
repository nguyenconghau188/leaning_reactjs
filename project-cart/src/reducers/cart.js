import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//     {
//         product: {
//             id: 1,
//             name: 'IPhone Xs',
//             image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/10/11/636748771945393060_iPhone-Xs-Max-gold.png',
//             description: 'Sản phẩm do Apple sản xuất',
//             price: 1000,
//             inventory: 10,
//             rating: 5
//         },
//         quantity: 5
//     },
//     {
//         product: {
//             id: 2,
//             name: 'Samsung Galaxy S10',
//             image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863643187455627_ss-galaxy-s10-trang-1.png',
//             description: 'Sản phẩm do Samsung sản xuất',
//             price: 900,
//             inventory: 15, 
//             rating: 5
//         }, 
//         quantity: 3
//     }
// ];

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = checkProductExistInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM_IN_CART:
            index = checkProductExistInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case types.UPDATE_ITEM_IN_CART:
            index = checkProductExistInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

var checkProductExistInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;