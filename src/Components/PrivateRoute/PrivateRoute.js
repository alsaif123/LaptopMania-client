import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
// import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
   const [signedInUser,setSignedInUser]=useContext(UserContext);
  const email = signedInUser.email;  

    return (
      <Route
        {...rest}
        render={({ location }) =>
          email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;