import React from "react";
import {CiHeart} from 'react-icons/ci';

import '../../styles/productPage.css'
function ProductDetails() {
  return (
    <div className="ContainerProductDetails">
      <div className="title_pageProd">
      <p className="locate_page_index">Rio de Janeiro > Rio de Janeiro e Região</p>
      
        <h2 className="Title_page_">titulo produto</h2>
        <p className="date_page_products">Publicado em Date</p>
      </div>
      <div className="Image_pageProduct">
      
        
      </div>

      <div className="infProductsPage">
        <h2 className="precoProductsPage">R$ 12.000</h2>
        <p className="descricaoProductsPage">descrição</p>
      </div>
      <div className="DivbtnOptionsFav">
        <button className="btnOptionsFav"> Favoritar</button>
        <button className="btnOptionsFav">
          Compartilhar
        </button>
        <button className="btnOptionsFav">
          Denunciar
        </button>
      </div>
      <div className="DivLocProductPages">
        <h3>Localização</h3>
        <p className="LocalateProductPages"><span className="spanLocatePag">CEP</span><br/><span>23052101</span></p>
        <p className="LocalateProductPages"><span  className="spanLocatePag">Município</span><br/><span>Rio de Janeiro</span></p>
        <p className="LocalateProductPages"><span  className="spanLocatePag">Bairro</span><br/><span>Campo Grande</span></p>
      </div>
      
    </div>
  );
}

export default ProductDetails;
