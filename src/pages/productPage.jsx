import React from "react";
import Header from '../components/header'
import '../styles/productPage.css'
import ContainerInformation from "../components/ProductPageComponents/containerInformation.jsx";
import ProductDetails from "../components/ProductPageComponents/productDetail";
import Propaganda from "../components/ProductPageComponents/propaganda";

function ProductPage() {
  return (
    <div className="ContainerProductPage">
        <Header/>
    <div className="DivAjusteProductPage">
      
      <ProductDetails/>
      <ContainerInformation/>
      <Propaganda/>
      </div>
    </div>
  );
}

export default ProductPage;
