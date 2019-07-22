import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.obj)
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.product_name}</td>
                <td>{this.props.obj.product_price}</td>
                <td><Link to={"/edit-item/" + this.props.obj.id} className="btn btn-primary">Edit</Link></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default TableRow;
