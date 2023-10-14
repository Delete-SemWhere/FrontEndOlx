import React from 'react';
import {SlControlStart, SlLocationPin} from 'react-icons/sl';
import '../styles/mainHomePage.css';
import { useNavigate } from 'react-router-dom';
const Product = ({ item }) => {
    const navigate = useNavigate();
    const clickItem = (item) =>{
        console.log(item)
        localStorage.getItem(item)
        navigate('/product')
        
    }
  return (
   
        <div onClick={() =>clickItem(item)} className='cards_Main' key={item.id}>
                   
                <img  className= 'img_card' src={item.pic}/>
                <div className='divAjusteCard'>
                    <p className= 'price_card' data={item}>R$ {item.price}</p>
                    <p className= 'title_card'>{item.title}</p>
                    <div className='formatar_loc_data'>
                        <SlLocationPin className='icon_loc_card'/>
                        <p className= 'loc_card'>{item.location}</p>
                        <p className= 'data_card'>{item.date}</p>
                    </div>
                </div>
            </div>  
      
 
  );
};

export default Product;