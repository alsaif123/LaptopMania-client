import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import loading from '../../images/loading (2).gif'
import Product from "../Home/Product";
const Products = ( ) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-headland-63766.herokuapp.com/getProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="container text-center pb-2">
       <h4 className="text-center pt-5">Your Laptops</h4>
       
      {products.length > 0 ? (
        <div className="products">
            
          {products.map((product) => (

            <Product product={product} key={product.key} />
          )).slice(0,6)}
        </div>
      ) : (
        <div className="text-center m-5 loading">
          <img src={loading} alt="loading-gif" />
        </div>
      )}
      <Link to="/products" className="see-all-button"> See All</Link>
    </div>
  );
};

export default Products;
