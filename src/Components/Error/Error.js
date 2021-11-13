  
import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {  faExclamation } from '@fortawesome/free-solid-svg-icons'
const Error = () => {
    return (
        <div className="container  my-5 text-center">
         
            <h3> <FontAwesomeIcon icon={faExclamation} className="mx-5"/> 404, This page is not found </h3>
            <hr />
            <i>Please try Again</i>
         
      </div>
    );
};

export default Error;