import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as Messages from '../constants/Messages';
import { actDeleteProductInCart } from '../actions';

class CartContainer extends Component {
    render() {
        var { cart, onDeleteItemInCart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart, onDeleteItemInCart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart, onDeleteItemInCart) => {
        var result = <tr><td>{Messages.MSG_CART_EMPTY}</td></tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key = {index}
                        item = {item}
                        index = {index}
                        onDeleteItemInCart = {onDeleteItemInCart}
                    />
                );
            });
        }
        return result;
    }

    showTotalAmount = (cart)  => {
        var result = null;
        if (cart.length > 0) {
            return (
                <CartResult 
                    cart = {cart}
                />
            );
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteItemInCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispathToProps = (dispatch, props) => {
    return {
        onDeleteItemInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CartContainer);