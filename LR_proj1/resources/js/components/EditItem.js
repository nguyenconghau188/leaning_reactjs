import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
    }

    handleChangeName() {

    }

    handleChangePrice() {

    }

    componentDidMount() {
        let uri = "http://localhost:8000/items/${this.props.params.id}/edit";
        Axios.get(uri)
            .then(response => {
                this.setState({
                    productName: response.data.product_name,
                    productPrice: response.data.product_price
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1>Edit an Item</h1>

                <form>
                    <div className="form-group col-md-6">
                        <label>Product name: </label>
                        <input type="text" className="form-control" value={this.state.productName} onChange={this.handleChangeName}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Product price: </label>
                        <input type="text" className="form-control" value={this.state.productPrice} onChange={this.handleChangePrice} />
                    </div>
                    <div className="form-group col-md-6">
                        <button className="btn btn-primary">Save</button>
                        <Link to="\list-items" className="btn btn-primary">Back</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditItem;
