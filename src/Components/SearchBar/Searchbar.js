import React from 'react';
import './Searchbar.css'
const Searchbar = () => {
    return (
        <div className="container text-center">
            <div className="search">
               <h3> Search Your new Laptop</h3>
                 <input type="search" name="search" id="search"/>
                 <button className="btn">Search</button>
                
           </div>
        </div>
        
    );
};

export default Searchbar;