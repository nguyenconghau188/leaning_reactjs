import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TableRow from './TableRow';
import Axios from 'axios';

class DisplayItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ''
        }

    }

    componentDidMount() {
        let uri = "http://localhost:8000/items";
        Axios.get(uri)
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    tableRow() {
        if (this.state.items instanceof Array) {
            return this.state.items.map(function(object, i) {
                return <TableRow obj={object} key={i} />
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/add-item">Add Item</Link>
                    </div>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Item name</td>
                            <td>Item price</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayItems;
