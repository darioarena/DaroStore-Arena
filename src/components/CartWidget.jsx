import React from "react";
import { Link } from "react-router-dom";


function CartWidget() {
  return (
    <Link to="/cart" className="cart">
    <lord-icon trigger="hover" src="https://cdn.lordicon.com/slkvcfos.json" className="opcion" id="carrito"></lord-icon>
  </Link>
  );
}

export default CartWidget;
