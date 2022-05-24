import { React, useState } from "react";
import ItemCount from "./ItemCount";
import "./Styles/Detail.css";
import { Link } from "react-router-dom";
import "./Styles/ItemCount.css";
import useCartContext from "../store/CartContext";

function ItemDetail({ producto }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();

  function onAdd(count) {
    addToCart(producto, count);
    setIsInCart(true);
  }

  if (producto === undefined) {
    return <div className="loader"></div>;
  } else {
    return (
      <div className="maxCard">
        <div className="blob"></div>
        <img className="img" src={producto.url} alt={producto.product} />
        <h3 className="title">{producto.product}</h3>
        <h3 className="description">DETALLE {producto.detail}</h3>
        <h4 className="price">${Intl.NumberFormat("es-AR").format(producto.price)}</h4>
        {isInCart ? (
          <div>
            <Link to="/cart" className="opcion">
              <p className="viewCart">
                Ver Carrito{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/dnoiydox.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  stroke="100"
                ></lord-icon>
              </p>
            </Link>
            <Link to="/" className="opcion">
              <p className="viewCart">
                Seguir comprando{" "}
                <lord-icon
                  src="https://cdn.lordicon.com/nlzvfogq.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  stroke="100"
                ></lord-icon>
              </p>
            </Link>
          </div>
        ) : (
          <ItemCount stock={producto.stock} initial={1} className="count" onAdd={onAdd} />
        )}
      </div>
    );
  }
}

export default ItemDetail;
