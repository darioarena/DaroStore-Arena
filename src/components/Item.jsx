import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="card">
      <Link to={`/product/${producto.id}`}>
        <div className="blob"></div>
        <img className="img" src={producto.url} alt={producto.product} />
        <h3>{producto.product}</h3>
        <h4>{producto.price}</h4>
      </Link>
    </div>
  );
}

export default Item;
