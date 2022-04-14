import React from 'react';
import './Styles/NavBar.css';
import imgLogo from '../assets/img/logo.png';
import CartWidget from './CartWidget';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(loadAnimation);

function NavBar(props) {
  return (
    <div className='navbar'>
      <section className='identidad'>
      <img src={imgLogo} alt="Logo Ecommerce" className='logo'/>
      <h2 className='titulo'>DaroStore</h2>
      </section>
      <ul className='menu'>
        <li><a href="a" className='opcion'>PCs</a></li>
        <li><a href="b" className='opcion'>Perifericos</a></li>
        <li><a href="c" className='opcion'>Mobiliario</a></li>
        {/* <li><FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='opcion' id='carrito'/></li> */}
        <li><CartWidget/></li>
      </ul>
    </div>
  );
}

export default NavBar;