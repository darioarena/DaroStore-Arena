import React from "react";

function Item({ producto }) {
  return (
    <div className="card">
      <div className="blob"></div>
      <img className="img" src={producto.url} alt={producto.product} />
      <h3>{producto.product}</h3>
      <h4>{producto.price}</h4>
    </div>
  );
}

export default Item;
