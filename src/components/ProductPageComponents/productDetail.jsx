import React from "react";

import '../../styles/productPage.css'
function ProductDetails() {
  return (
    <div className="ContainerProductDetails">
      <p>Rio de Janeiro > Rio de Janeiro e Região</p>
      <div>
        <h2>titulo produto</h2>
        <p>Publicado em Date</p>
      </div>
      <div>
        <p>Imagem</p>
      </div>
      <div>
        <h2>R$ 12.000</h2>
        <p>descrição</p>
      </div>
      <div>
        <button>Favoritar</button>
        <button>
          Compartilhar
        </button>
        <button>
          Denunciar
        </button>
      </div>
      
    </div>
  );
}

export default ProductDetails;
