import React, { Component } from 'react';

export default class CartResult extends Component {
    render() {
        var {cart} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }

    showTotalAmount = (cart) => {
        var result = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                result += cart[i].product.price * cart[i].quantity;
            }
        }
        return result;
    }
}