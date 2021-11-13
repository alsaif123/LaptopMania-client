import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const name = signedInUser.name;
  const email = signedInUser.email;
  const img = signedInUser.profile;
  const handleLogOut = () => {
    localStorage.clear();
    history.go(0);
  };

  // const name = JSON.parse(localStorage.getItem("name"));
  // const email = JSON.parse(localStorage.getItem("email"));
  // const img= JSON.parse(localStorage.getItem("img"));

  return (
    <>
      <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/home" className="brand">
          Laptop Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/home" className="px-3 link">
              Home
            </Link>
            <Link to="/orders" className="px-3 link">
              Orders
            </Link>
            <Link to="/AdminShowProduct" className="px-3 link">
              Admin
            </Link>
            <Link to="/home" className="px-3 link">
              Deals
            </Link>
            <Link to="/about" className="px-3 link">
              About
            </Link>
            <Link to="/products" className="px-3 link">
              Products
            </Link>
          </Nav>
          <div className="user-profile">
            {email && (
              <Nav className="mx-auto text-white profile-name">
                <small>{name}</small>{" "}
              </Nav>
            )}
            {email && (
              <Nav className="mx-auto">
                {" "}
                <img src={img} alt="profile-img" className="profile-img" />
              </Nav>
            )}
          </div>
          <Nav className="mx-right">
            {!email && (
              <Link to="/Login">
                <Button
             
                  className="mx-3 nav-signin-button"
                >
                  Sign In
                </Button>{" "}
              </Link>
            )}
            {email && (
              <Button
                className="mx-3 nav-signout-button"
                onClick={handleLogOut}
              >
                Sign Out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
