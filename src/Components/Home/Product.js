import React from "react";
import "../Products/Products.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
    const { name, img, stock, price, _id } = product;
    return (
        <div className="product-card">
        <img src={img} alt="laptop" className="logo" />
        <h3> {name}</h3>
        <hr />
        <h5>
          {" "}
          Stock : <small>{stock}</small>
        </h5>
        <h5>
          {" "}
          price : $ <small>{price}</small>
        </h5>
  
        <Link className="btn" to={`/CheckOut/${_id}`}>
        
        <FontAwesomeIcon icon={faShoppingCart} className="mx-2"/>
        Buy Now
        </Link>
        {/*   <button className="btn" onClick={() => { seeDetails(_id) }}>
            <FontAwesomeIcon icon={faShoppingBasket} className="mx-2" />   Buy Now
              </button> */}
      </div>
    );
};

export default Product;