import React, { useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import useCartContext from "../store/CartContext";
import "./Styles/Cart.css";
import { createBuyOrder } from "../data/firebase";


defineLordIconElement(loadAnimation);

function Cart() {
  const { cart, removeToCart, clearCart, totalPrice } = useCartContext();
  const [orderID, setOrderID] = useState();
  const [datosComprador, setDatosComprador] = useState();


  function handleBuy() {

    const data={
      name: document.getElementById('fname').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value
    }

    const itemsToBuy = cart.map((item) => ({ title: item.product, cant: item.cant, price: item.price, id: item.id }));
    const buyOrder = {
      buyer: data,
      items: itemsToBuy,
      total: totalPrice(),
    };
    setOrderID(false);
    setDatosComprador(data);
    createBuyOrder(buyOrder).then((res) => {
      setOrderID(res);
    });
    clearCart();
  }

  function handleForm(){
    const cabeceraCart = document.getElementsByClassName('cartTable');
    for (let i = 0; i < cabeceraCart.length; i++) {
      cabeceraCart[i].style.display='none';
    }
    const nuevoTitulo = document.createElement('span');
    const blobForm = document.getElementById('tituloForm');
    nuevoTitulo.innerHTML='FORMULARIO';
    nuevoTitulo.setAttribute('class','cartTable')
    blobForm.appendChild(nuevoTitulo);
    blobForm.style.gridTemplateColumns='1fr';
    document.getElementsByClassName('detailContainer')[0].style.display='none';
    document.getElementsByClassName('total')[0].style.display='none';
    document.getElementsByClassName('noselect')[0].style.display='none';
    document.getElementsByClassName('comprar')[0].style.display='none';
    document.getElementsByClassName('end')[0].style.display='flex';
    document.getElementsByClassName('botones')[0].style.justifyContent='end';
    document.getElementsByClassName('formulario')[0].style.display='flex';
  }

  if (cart.length === 0) {
    if (orderID === false) {
      return <div className="loader"></div>;
    } else {
      if (orderID) {
        return (
          <div>
            <h3 className="noItemCart">Gracias {datosComprador.name} por tu compra, la orden es {orderID}</h3>
            <a href="/" className="home">
              Volver a Home
            </a>
          </div>
        );
      } else {
        return (
          <div>
            <h3 className="noItemCart">No hay items en el carrito</h3>
            <a href="/" className="home">
              Volver a Home
            </a>
          </div>
        );
      }
    }
  } else {
    return (
      <div className="cardCart">
        <div className="blob" id="tituloForm">
          <span className="cartTable"></span>
          <span className="cartTable titleTop">PRODUCTO</span>
          <span className="cartTable">CANTIDAD</span>
          <span className="cartTable">$ UNITARIO</span>
          <span className="cartTable">$ SUBTOTAL</span>
          <span className="cartTable lastColumn"></span>
        </div>
        <div className="itemContainer">
          {cart.map((itemCart) => {
            return (
              <div className="detailContainer" key={itemCart.id}>
                <img src={itemCart.url} className="imagen" alt="imagen"></img>
                <h3 className="title">{itemCart.product}</h3>
                <h3 className="cantidad"><span className="cant">Cantidad</span>{itemCart.cant}</h3>
                <h4 className="unitario">${Intl.NumberFormat("es-AR").format(itemCart.price)}</h4>
                <h4 className="subtotal">
                  ${Intl.NumberFormat("es-AR").format(itemCart.cant * itemCart.price)}
                </h4>
                <button onClick={() => removeToCart(itemCart.id)}>
                  <lord-icon
                    src="https://cdn.lordicon.com/gsqxdxog.json"
                    trigger="hover"
                    colors="primary:#e83a30,secondary:#e83a30"
                    stroke="100"
                    state="hover-empty"
                    className="trashItem"
                  ></lord-icon>
                </button>
              </div>
            );
          })}

          <h2 className="total">TOTAL ${Intl.NumberFormat("es-AR").format(totalPrice())}</h2>
          <div className="botones">
            <button onClick={clearCart} className="noselect">
              <span className="text">Vaciar Carrito</span>
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </span>
            </button>
            <button onClick={handleForm} id='comprar' className="noselect comprar">
              <span className="text comprar" id="next">SIGUIENTE</span>
              <span className="icon comprar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="formulario">
          <label htmlFor="fname" className="infoForm">NOMBRE Y APELLIDO</label>
          <input type="text" id="fname" placeholder="Homero Simpson" className="infoForm"/>
          <label htmlFor="email" className="infoForm">CORREO</label>
          <input type="email" id="email" placeholder="homero@duff.com" className="infoForm"/>
          <label htmlFor="phone" className="infoForm">TELEFONO</label>
          <input type="tel" id="phone" placeholder="+54 351 3123456" className="infoForm"/>
          <button onClick={handleBuy} className="noselect comprar end">
              <span className="text comprar" id="next">COMPRAR</span>
              <span className="icon comprar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
              </span>
            </button>

        </div>
      </div>
    );
  }
}

export default Cart;
