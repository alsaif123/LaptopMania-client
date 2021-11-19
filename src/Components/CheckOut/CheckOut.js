import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCheckDouble,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";
const CheckOut = () => {
  const history = useHistory();

  const [signedInUser, setSignedInUser] = useContext(UserContext);
  console.log(signedInUser);

  const [productData, setProductData] = useState([]);

  const [product, setProduct] = useState({});

  const name = signedInUser.name;
  const email = signedInUser.email;

  useEffect(() => {
    fetch("http://localhost:6565/getProduct")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        const userProduct = data.find((e) => e._id === id);
        setProduct(userProduct);
        // console.log(userProduct)
      });
  }, []);

  const { id } = useParams();

  const handleCheckoutProduct = (e) => {
    const checkOutInfo = {
      name: name,
      email: email,
      productName: product.name,
      productPrice: product.price,
      productImg: product.img,
    };
    console.log(checkOutInfo);
    fetch("http://localhost:6565/addOrderedProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkOutInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        history.replace("/orders");
        // history.go(0);
      });
    e.preventDefault();
  };

  return (
    <div className="container text-center">
      <div className="table-up text-center m-5">
        <h4>Your Selected Product</h4>
      </div>
      <Table
        striped
        bordered
        hover
        variant="dark"
        responsive="sm"
        className="m-3"
      >
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Laptop Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Shipping Charge</th>
            <th>User Email</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-dark text-white">
            <td>1</td>
            <td>{product.name}</td>
            <td>{1}</td>
            <td>{product.price}</td>
            <td>{product.shipping}</td>
            <td>{email}</td>
            <td>{new Date().toLocaleDateString("en-US")}</td>
          </tr>
        </tbody>
      </Table>

      <Link to="/orders">
        <button
          className="btn btn-primary mx-5"
          onClick={handleCheckoutProduct}
        >
          <FontAwesomeIcon icon={faCheckCircle} className="mx-2" /> Checkout
        </button>
      </Link>
    </div>
  );
};

export default CheckOut;
