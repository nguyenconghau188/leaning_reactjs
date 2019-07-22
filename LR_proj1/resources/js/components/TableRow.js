import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        let uri = "http://localhost:8000/items/"+this.props.obj.id;
        Axios.delete(uri)
            .then((response) => {
                this.context.history.push('/list-items')
            });
    }

    render() {
        console.log(this.props.obj)
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.product_name}</td>
                <td>{this.props.obj.product_price}</td>
                <td><Link to={"/edit-item/" + this.props.obj.id} className="btn btn-primary">Edit</Link></td>
                <td><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default TableRow;
