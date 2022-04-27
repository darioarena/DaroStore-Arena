import React from "react";
import ItemCount from "./ItemCount";
import "./Styles/Detail.css";


function ItemDetail({ producto }) {
  return (
    <div className="maxCard">
      <div className="blob"></div>
      <img className="img" src={producto.url} alt={producto.product} />
      <h3 className="title">{producto.product}</h3>
      <h3 className="description">DETALLE {producto.detail}</h3>
      <h4 className="price">{producto.price}</h4>
      <ItemCount stock={producto.stock} initial={1} className="count"/>
    </div>
  );
}

export default ItemDetail;
