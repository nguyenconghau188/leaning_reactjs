import React, { Component } from 'react';
import * as Messages from '../constants/Messages';

export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    render() {
        var { item } = this.props;
        var quantity = item.quantity > 1 ? item.quantity : this.state.quantity;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => {this.onUpdateQuantity(item, quantity-1)}}
                        >
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => {this.onUpdateQuantity(item, quantity+1)}}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{item.quantity * item.product.price}$ </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top" 
                        title="" 
                        data-original-title="Remove item"
                        onClick={ () => {this.onDeleteItem(item.product)}}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var {onUpdateQuantityInCart} = this.props;
            this.setState({
                quantity: quantity,
            });
            onUpdateQuantityInCart(product, quantity);
        }
    }

    onDeleteItem = (product) => {
        var { onDeleteItemInCart, onChangeMessageWhenDeleteProduct } = this.props;
        onDeleteItemInCart(product);
        onChangeMessageWhenDeleteProduct(Messages.MSG_DELETE_ITEM_IN_CART_SUCCESS);
    }
}