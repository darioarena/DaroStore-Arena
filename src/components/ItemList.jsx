import React from "react";
import Item from "./Item";
import "./Styles/Items.css";

function ItemList({ productos }) {
  return (
    <div className="gallery">
      {productos.map((thisProduct) => {
        return <Item producto={thisProduct} key={thisProduct.id} />;
      })}
    </div>
  );
}

export default ItemList;
