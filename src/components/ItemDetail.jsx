import { React, useState } from "react";
import ItemCount from "./ItemCount";
import "./Styles/Detail.css";
import { Link } from "react-router-dom";
import "./Styles/ItemCount.css";

function ItemDetail({ producto }) {
  const [isInCart, setIsInCart] = useState(false);
  function onAdd(count) {
    console.log(`agregaste al carrito ${count} items`);
    setIsInCart(true);
  }

  return (
    <div className="maxCard">
      <div className="blob"></div>
      <img className="img" src={producto.url} alt={producto.product} />
      <h3 className="title">{producto.product}</h3>
      <h3 className="description">DETALLE {producto.detail}</h3>
      <h4 className="price">{producto.price}</h4>
      {isInCart ? (
        <Link to="/cart" className="opcion">
          <p className="viewCart">Ver Carrito</p>
        </Link>
      ) : (
        <ItemCount stock={producto.stock} initial={1} className="count" onAdd={onAdd} />
      )}
    </div>
  );
}

export default ItemDetail;
