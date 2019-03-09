import React from 'react';
import './product.css';
import Modal from '../modal/modal';
const Product = (props) => {

    const x = () => {
        console.log(Modal);
        alert("Hello World BITCHESSSSS");
    }

    return (
        <div className="container">
            <ul>
                <li style={{ fontSize: "larger", listStyle: "none" }}>Title: {props.title}</li>
                <li style={{ color: "orange", listStyle: "none", display: !props.description && "none" }}>Description: {props.description}</li>
            </ul>
            <button id="submit" className="btn btn-primary" onClick={x} ></button>
        </div>
    )
}

export default Product;