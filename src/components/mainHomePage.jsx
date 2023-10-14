import '../styles/mainHomePage.css';
import React from 'react';
import {SlControlStart, SlLocationPin} from 'react-icons/sl';

import products from '../data/products.json'
import Product from './product.jsx';
function MainHomePage() {
   
    
  return (
    <div className='MainContainer'>
        <div className='mainFotoPromocao'>
            <img  className='imagemMainPromocao' alt='Imagem Promocional' src='https://static.olx.com.br/nu/images/banner/desktop_large_07e0e30984f24d6197b879e69e0cd3ef.webp'/>
        </div>
        <div className='secao_itens'>
            <ul>
                
                <li className='item_autopecas'>Auto e Peças</li>
                <li className='item_imoveis'>Imoveis</li>
                <li className='item_eletro'>Eletr. e celulares</li>
                <li className='item_casa'>Para sua casa</li>
                <li className='item_moda'>Moda e beleza</li>
                <li className='item_lazer'>Esportes e lazer</li>
                <li className='item_music'>Músicas hobbies</li>
                <li className='item_infantis'>Artigos infantis</li>
                <li className='item_agro'>Agro e indústria</li>
                <li className='item_serv'>Serviços</li>
                <li className='item_emprego'>Vagas de emprego</li>
                <li className='item_categorias'>Todas as categorias</li>
            
            </ul>

        </div>
        <div className='cards_menu_Main'>
            <h2>Recomendados para você em Hacktudo 2023 - Delete Sem Where</h2>
            <div className='itens_cards_main'>
            {products.map((item, index) => {
                 return (
               <Product key={index} item ={item}/>
                 );
           
            })}
            </div>
        </div>
    
    </div>
  );
}

export default MainHomePage;