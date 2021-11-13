import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import Order from '../Order/Order'
import loading from '../../images/loading (2).gif'
 
const Orders = () => {
       const [orderedProducts, setOrderedProducts] = useState([]);
       console.log(orderedProducts);

    useEffect( () => {
        fetch('https://laptop-bazar-sever.herokuapp.com/checkout')
        .then(res => res.json())
        .then(data =>setOrderedProducts(data))
    }, [])

    const handlePlaceOrder = (e) => {
        alert('Your Order Placed')
    }
    return (
      <>
      {
        orderedProducts.length > 0 ?
      <div className="container text-center">
        <div className="text-center m-5">
          <h4 className="header-text">Your Selected Products</h4>
        </div>
          <Table striped bordered hover variant="dark"  responsive="sm" className="m-2">
  <thead>
    <tr>
       
      <th>Laptop Name</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>User Name</th>
      <th>User Email</th>
      <th>Product image</th>
      <th>Action</th>
      <th>Date</th>
              
   
    </tr>
  </thead>
   {
                orderedProducts.map(order => (<Order order={order}/>))
            }
            </Table>
            <button className="btn my-5" onClick={handlePlaceOrder}>Place Order</button>
              </div> 
              :<div className="text-center m-5 loading">
              <img src= {loading} alt="loading-gif"/>      
                </div>
      }
      
</>
              
      
    );
};

export default Orders;