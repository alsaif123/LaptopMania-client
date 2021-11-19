 
import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
 
import { CardGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../AdminAddProduct/Admin.css";
import { UserContext } from "../../App";
const AdminAllProduct = ({ product }) => {
  const history = useHistory();
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const signedInUserName = signedInUser.name;
  const signedInEmail = signedInUser.email;
 
  const { _id, name, stock, price, img, adminEmail, adminName } = product;
  console.log(product);

  const handleDelete = () => {
    fetch(`http://localhost:6565/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        history.replace("/");
      });
  };

  return (
    <>
      {signedInEmail && (
        <CardGroup className="m-5">
          <Card className="m-3 bg-dark text-white">
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <hr />
              <Card.Text>
                <div className="product-info my-4">
                  <p>
                    Price : <small>${price}</small>
                  </p>
                  <p>
                    Stock : <small>{stock}</small>
                  </p>
                </div>
                <small className="text-strong px-2">
                  Product Added on{" "}
                  <h5>{new Date().toLocaleDateString("en-US")}</h5>
                </small>

                <div className="admin-info">
                  <p>
                    Admin Name :{" "}
                    <small className="text-strong px-2">{adminName}</small>{" "}
                  </p>
                  <p>
                    Admin Email:
                    <small className="text-strong px-2">{adminEmail}</small>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>

            <Card.Footer>
              <button className="btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </Card.Footer>
          </Card>
        </CardGroup>
      )}
    </>
  );
};

export default AdminAllProduct;
