import React, { useContext, useState } from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
import { auth, googleProvider} from './Firebase';
import { UserContext } from '../../App';


const Login = () => {
 
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState({});
    

    let { from } = location.state || { from: { pathname: "/" } };

    

    // var googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleLogin = () => {
         auth.signInWithPopup(googleProvider )
        .then( result => {
            // const user = result.user;
         
            // localStorage.setItem("name", JSON.stringify(user.displayName));
            // localStorage.setItem("email", JSON.stringify(user.email));
            // localStorage.setItem("img", JSON.stringify(user.photoURL));
            

      const { displayName, email, photoURL} = result.user;
      const signInUser = {
          name: displayName,
          email: email,
          profile:photoURL
            }
            
   setSignedInUser(signInUser);
   history.replace(from);

        })
             .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({errorCode, errorMessage});
        });
    }
    return (
        <>
           <form className="form">
                    <h3>Sign In  </h3>
                    
                    <div className="input">
                        <input type="Email" name="email" placeholder="Email" required/>
                       
                        </div>
                    <div className="input">
                        <input type="password" placeholder="Password" name="password" required/>
                        </div>
                     
                  
                    <button className="button" type="submit">Sign In</button>
                  
            <div className="social-login">
                 <h5>Or Sign In with social account</h5>
                  <div className="social-icons">              
                 
                 
                    <div className="icon" onClick={handleGoogleLogin }>
                        <img src="https://img.icons8.com/fluent/16/000000/google-logo.png" alt="icon" onClick={ handleGoogleLogin }/>
                      
                    </div>
                    
                    <div className="icon">
                       <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="icon"/>
                        
                    </div>
                       <div className="icon" >
                            <img src="https://img.icons8.com/officel/64/000000/facebook-new.png" alt="icon" />
                     
                    </div>
                            
               </div>
            </div>
                 <p style={{color: 'red'}}>{error.errorCode} {error.errorMessage}</p>                     
            </form>
        </>
    );
};

export default Login;