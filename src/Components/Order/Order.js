import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Order.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
const Order = ({ order }) => {
 console.log(order);
const [signedInUser, setSignedInUser] = useContext(UserContext);
  const signedInUserName= signedInUser.name; 
  const signedInEmail = signedInUser.email;
 
    const { productName, productImg, productPrice, email, key } = order;
    console.log(email);
    //    const signedInEmail = JSON.parse(localStorage.getItem("email")); 
    //    const signedInUserName = JSON.parse(localStorage.getItem("name")); 

    const history = useHistory();

    const handleDelete = () => {
        fetch(`https://laptop-bazar-sever.herokuapp.com/userDelete/${key}`,
            { method: 'DELETE' })
        .then(res => res.json())
        .then(result => {
            history.go(0);
        })
    }
  
    return (
       <>
            {email === signedInEmail && 
             
  
  <tbody>
          <tr>
      <td>{productName}</td>
      <td>{1}</td>
      <td>{productPrice}</td>
      <td>{signedInUserName}</td>
      <td>{signedInEmail}</td>
      <td><img className="productImage" src={productImg} alt="productImage"/></td>
     
      <td><button ><FontAwesomeIcon icon={faTrash} className="icon" onClick={handleDelete}/></button></td>
      <td>{new Date().toLocaleDateString("en-US")}</td>
     </tr>
     
  </tbody>
           
            }
        
      </>
    );
};

export default Order;
