import React  from "react";
 
import Products from '../Products/Products'
import "./Home.css";
 
import Hero from "./Hero";
import Footer from "./Footer";
import FAQ from "./FAQ";
import Companies from "./Companies";
 
const Home = () => {
 

  return (
    <>
    <Hero/>
      {/* <Searchbar /> */}
      <Products/>
      <FAQ/>
      <Companies/>
      <Footer/>
    </>
  );
};

export default Home;
