import '../styles/header.css';
import { IoSearchOutline } from 'react-icons/io5';
import {BiShoppingBag} from 'react-icons/bi';
import {GrAidOption} from 'react-icons/gr';
import {PiChatCircleLight} from 'react-icons/pi';
import {GrLocation} from 'react-icons/gr';
import {IoMdNotificationsOutline} from 'react-icons/io';
function Header() {
  return (
    <div className='headerContainer'>
     <div className='div_organizer'>
        <ul className='image_header'>
            <li className='item_header'><img src='olx_logo.png'  className='img_logo' alt='logo'/></li>
            
        </ul>

        <ul className='input_header'>
            <input placeholder='Buscar "Apartamento"' className='input_header_'/>
            <span className='barra_input_header'></span>
            <GrLocation  classname = 'iconselectheader' size={28}></GrLocation>
            
            <select className='select_header'>
            
              <option>RJ</option>
              <option>SP</option>
            </select>
            <IoSearchOutline  className='icon_search' size={19} />
            
        </ul>
        <ul className='options_header'>
         
          <BiShoppingBag  classname = 'itemoption' size={20}/>
          <a classname = 'itemoption'> Plano Profissional</a>
         
          <GrAidOption   classname = 'itemoption' size={20}/>
          <a  classname = 'itemoption'>Meus Anúncios</a>
          <PiChatCircleLight  classname = 'itemoption' size={20}/>
          <a classname = 'itemoption'>Chat</a>
          <IoMdNotificationsOutline  classname = 'itemoption' size={20}></IoMdNotificationsOutline>
          <a  classname = 'itemoption'>Notificações</a>
       
        </ul>
        <ul className='button_header'>
          <button className='btnHacktudoHeader'>Hacktudo 2023</button>
          <button className='btnAnunciarHeader'>Anunciar</button>
          
       
        </ul>
          
     </div>
    </div>
  );
}

export default Header;