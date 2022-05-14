import React from "react";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";

function CartWidget() {
  const { quantityInCart } = useCartContext();
  if (quantityInCart() === 0) {
    return (
      <Link to="/cart" className="cart">
        <lord-icon
          trigger="hover"
          src="https://cdn.lordicon.com/slkvcfos.json"
          colors="primary:#121331,secondary:#2a81bb"
          className="opcion"
          id="carrito"
        >
        </lord-icon>
      </Link>
    );
  } else {
    return (
      <Link to="/cart" className="cart">
        <lord-icon
          trigger="hover"
          src="https://cdn.lordicon.com/slkvcfos.json"
          colors="primary:#121331,secondary:#2a81bb"
          className="opcion"
          id="carrito"
        >
          <span id="quantityWidget">{quantityInCart()}</span>
        </lord-icon>
      </Link>
    );
  }
}

export default CartWidget;
