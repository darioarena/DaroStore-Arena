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
    // console.log(`agregaste al carrito ${count} items`);
    addToCart(producto, count);
    setIsInCart(true);
    // console.log(producto,count);
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
          <Link to="/cart" className="opcion">
            <p className="viewCart">Ver Carrito</p>
          </Link>
        ) : (
          <ItemCount stock={producto.stock} initial={1} className="count" onAdd={onAdd} />
        )}
      </div>
    );
  }
}

export default ItemDetail;
