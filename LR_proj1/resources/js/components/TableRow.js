import React, {Component} from 'react';

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
                <td><button className="btn btn-primary">Edit</button></td>
                <td><button className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default TableRow;
