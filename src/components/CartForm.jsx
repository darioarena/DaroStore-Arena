import React from "react";
import "./Styles/Cart.css";

function CartForm() {
  return (
    <>
      <label htmlFor="fname" className="infoForm">
        NOMBRE Y APELLIDO
      </label>
      <input type="text" id="fname" placeholder="Homero Simpson" className="infoForm" />
      <label htmlFor="email" className="infoForm">
        CORREO
      </label>
      <input type="email" id="email" placeholder="homero@duff.com" className="infoForm" />
      <label htmlFor="phone" className="infoForm">
        TELEFONO
      </label>
      <input type="tel" id="phone" placeholder="+54 351 3123456" className="infoForm" />
    </>
  );
}

export default CartForm;
