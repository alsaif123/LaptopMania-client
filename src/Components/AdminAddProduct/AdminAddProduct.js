import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import "./Admin.css";

const AdminAddProduct = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  //  const [signedInUser, setSignedInUser] = useContext(UserContext);

  //   const signedInEmail = signedInUser.email;

  const history = useHistory();

  const onSubmit = (data, e) => {
    const newProduct = {
      tag: "Newly Added",
      productName: data.productName,
      key: data.key,
      price: data.price,
      shipping: data.shipping,
      stock: data.stock,
      img: imageUrl,
      adminEmail: data.email,
      adminName: data.name,
      date: selectedDate.toLocaleDateString("en-US"),
    };
    const url = "http://localhost:6565/addProduct";

   

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => console.log("Server Response ", res))
      .then((data) => {
        history.replace("/AdminShowProduct");
      });

    e.preventDefault();
  };

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "27b9ad8148808fb842b02c970d1956c1");
    imageData.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageUrl(res.data.data.display_url);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container text-center my-5">
      <h2>For Admin</h2>
      <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <br />
        <input
          name="productName"
          type="text"
          ref={register({ required: true })}
        />
        <br />

        <small className="error text-danger">
          {errors.name && "Product is required"}
        </small>
        <br />

        <label>Admin Email</label>
        <br />
        <input name="email" type="email" ref={register({ required: true })} />
        <br />
        <label>Admin Name</label>
        <br />
        <input name="name" type="text" ref={register({ required: true })} />
        <br />

        <small className="error text-danger">
          {errors.email && "Product is required"}
        </small>
        <br />

        <label>Product Key</label>
        <br />
        <input name="key" type="text" ref={register({ required: true })} />
        <br />
        <small className="error text-danger">
          {errors.key && "Key is required"}
        </small>
        <br />

        <label>Product Price</label>
        <br />
        <input
          name="price"
          type="number"
          label="Price"
          defaultValue="0"
          ref={register({ required: true })}
        />
        <br />
        <small className="error text-danger">
          {errors.price && "Put a value"}
        </small>
        <br />

        <label>Shipping Charge</label>
        <br />
        <input
          name="shipping"
          type="number"
          label="Shipping"
          defaultValue="0"
          ref={register({ required: true })}
        />
        <br />
        <small className="error text-danger">
          {errors.shipping && "Put a value"}
        </small>
        <br />

        <label>In Stock</label>
        <br />
        <input
          name="stock"
          type="number"
          defaultValue="0"
          ref={register({ required: true })}
        />
        <br />
        <small className="error text-danger">
          {errors.stock && "Put a value"}
        </small>
        <br />

        <label>Put a Sample Image</label>
        <br />
        <input
          name="exampleRequired"
          type="file"
          ref={register({ required: true })}
          onChange={handleImageUpload}
        />
        <br />

        <small className="error text-danger">
          {errors.exampleRequired && "Please put a image"}
        </small>
        <br />
        <input type="submit" />
        <br />
      </form>
    </div>
  );
};

export default AdminAddProduct;
