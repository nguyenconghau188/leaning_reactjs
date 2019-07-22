import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            productName: e.target.value
        });
    }

    handleChangePrice(e) {
        this.setState({
            productPrice: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const product = {
            productName: this.state.productName,
            productPrice: this.state.productPrice
        }
        let uri = 'http://localhost:8000/items';
        axios.post(uri, product).then((response) => {
            this.props.history.push("/list-items");
        });
    }

    render() {
        return (
            <div className="container">
                <h1>
                    Create An Item
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name: </label>
                                <input type="text" className="form-control" onChange={this.handleChangeName}></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price: </label>
                                <input type="text" className="form-control" onChange={this.handleChangePrice}></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-group">
                                <button className="btn btn-primary">Add Item</button>
                            </div>
                            <div className="form-group">
                                <Link to="/" className="btn btn-primary">Back</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateItem;
