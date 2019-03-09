import React from 'react';
import './product.css';
import Modal from '../modal/modal';
import products from '../../Api/productsData';


class Product extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        const triggerAlert = () => {
            console.log(Modal);
            alert("Hello World BITCHESSSSS");
        }

        return (
            <div className="container">
                <ul>
                    <li style={{ fontSize: "larger", listStyle: "none" }}>Title: {this.props.title}</li>
                    <li style={{ color: "orange", listStyle: "none", display: !this.props.description && "none" }}>Description: {this.props.description}</li>
                </ul>
                
                {(this.props.description) ? <button id="submit" className="btn btn-primary" onClick={triggerAlert} ></button> : "Coming soon"}

            </div>
        )
    }
}
export default Product;