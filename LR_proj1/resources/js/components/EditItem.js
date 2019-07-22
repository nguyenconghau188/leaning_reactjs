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

        let uri = "http://localhost:8000/items/"+this.props.match.params.id;
        Axios.patch(uri, product)
            .then((response) => {
                this.props.history.push("/list-items");
            })
    }

    componentDidMount() {
        let productId = this.props.match.params.id;
        let uri = "http://localhost:8000/items/"+productId+"/edit";
        console.log(uri);
        Axios.get(uri)
            .then(response => {
                console.log(response.data.product_name)
                this.setState({
                    productName: response.data.product_name,
                    productPrice: response.data.product_price
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container">
                <h1>Edit an Item</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Product name: </label>
                            <input type="text" className="form-control" value={this.state.productName} onChange={this.handleChangeName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Product price: </label>
                            <input type="text" className="form-control" value={this.state.productPrice} onChange={this.handleChangePrice} />
                        </div>
                    </div>    
                    <div className="row">
                        <div className="form-group col-md-3">
                            <button className="form-control btn btn-primary">Save</button>
                            <Link to="/list-items" className="form-control btn btn-primary">Back</Link>
                        </div>
                    </div>            
                </form>
            </div>
        );
    }
}

export default EditItem;
