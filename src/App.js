import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Error from "./Components/Error/Error";
import Login from "./Components/Login/Login";
import CheckOut from "./Components/CheckOut/CheckOut";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import AdminAddProduct from "./Components/AdminAddProduct/AdminAddProduct";
import AdminShowProduct from "./Components/AdminShowProduct/AdminShowProduct";
import { createContext, useEffect, useState } from "react";
import About from "./Components/About/About";
import loading from './images/loading (2).gif'
import Product from "./Components/Home/Product";

export const UserContext = createContext();

function App() {
  const [signedInUser, setSignedInUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://secret-headland-63766.herokuapp.com/getProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <PrivateRoute path="/AdminShowProduct">
            <AdminShowProduct />
          </PrivateRoute>
          <PrivateRoute path="/AdminAddProduct">
            <AdminAddProduct />
          </PrivateRoute>
          <PrivateRoute path="/CheckOut/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/Orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/products">
          {products.length > 0 ? (
        <div className="products">
            
          {products.map((product) => (

            <Product product={product} key={product.key} />
          )) }
        </div>
      ) : (
        <div className="text-center m-5 loading">
          <img src={loading} alt="loading-gif" />
        </div>
      )}
          </PrivateRoute>
          {/* <PrivateRoute path='/Admin/:id'>
             <Admindash/>
          </PrivateRoute> */}
          {/* <PrivateRoute path='/Orders'>
            <Orders/>
          </PrivateRoute> */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
