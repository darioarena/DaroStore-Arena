import React from 'react';
import './Styles/NavBar.css';
import imgLogo from '../assets/img/logo.png';
import CartWidget from './CartWidget';
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { Link } from 'react-router-dom';

defineLordIconElement(loadAnimation);

function NavBar() {
  return (
    <div className='navbar'>
      <section className='identidad'>
        <Link to="/" className='identidad'>
          <img src={imgLogo} alt="Logo Ecommerce" className='logo'/>
          <h2 className='titulo'>DaroStore</h2>
        </Link>
      </section>
      <ul className='menu'>
        <li><Link to="/" className='opcion'>Todos los Productos</Link></li>
        <li><Link to="/category/Notebooks" className='opcion'>Notebooks</Link></li>
        <li><Link to="/category/Perifericos" className='opcion'>Perifericos</Link></li>
        <li><Link to="/category/Mobiliario" className='opcion'>Mobiliario</Link></li>
        <li><CartWidget/></li>
      </ul>
    </div>
  );
}


export default NavBar;