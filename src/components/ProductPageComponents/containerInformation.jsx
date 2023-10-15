import React from "react";

import '../../styles/productPage.css'
function ContainerInformation() {
  return (
    <div className="ContainerInformation">
      <div  className="PrecoContainerInformation">
        <p className="priceDiv">R$ 12.000</p>
      </div>

      <div className="divvendedor">
        <h2>Entre em contato</h2>
        
        <button className="btnChat">Chat</button>
        <div className="linha">

        </div>
       
        <p className="okok"><span className="bolinha"></span> Online Agora</p>
      </div>

      <div className="divvendedorInfo">
        <h4>Informações do vendedor</h4>
        <p>Hacktudo 2023</p>
        <div className="linha">

        </div>
        <p>Endereço</p>
        <p>Rio de Janeiro - RJ</p>
        <div className="linha">

        </div>
        <p>Na OLX desde</p>
        <p>Sempre</p>
        <div className="linha">

        </div>
        
        <p><span className="bolinha"></span>Facebook verificado</p>
        <p><span className="bolinha"></span>E-mail verificado</p>
        <p><span className="bolinha"></span>Telefone verificado</p>
        </div>
      
      
    </div>
  );
}

export default ContainerInformation;
