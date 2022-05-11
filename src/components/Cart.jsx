import React from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import useCartContext from "../store/CartContext";
import "./Styles/Cart.css";

defineLordIconElement(loadAnimation);

function Cart() {
  const { cart, removeToCart, clearCart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <h3 className="noItemCart">No hay items en el carrito</h3>
        <a href="/" className="home">Volver a Home</a>
      </div>
    );
  } else {
    return (
      <div className="cardCart">
        <div className="blob"></div>
        <div className="itemContainer">
          {cart.map((itemCart) => {
            return (
              <div className="detailContainer" key={itemCart.id}>
                <img src={itemCart.url} className="imagen"></img>
                <h3 className="title">{itemCart.product}</h3>
                <h3 className="cantidad">Cantidad: {itemCart.cant}</h3>
                <h4 className="unitario">Unitario: ${Intl.NumberFormat("es-AR").format(itemCart.price)}</h4>
                <h4 className="subtotal">
                  Subtotal: ${Intl.NumberFormat("es-AR").format(itemCart.cant * itemCart.price)}
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
            <button className="noselect comprar">
              <span className="text comprar">COMPRAR</span>
              <span className="icon comprar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
