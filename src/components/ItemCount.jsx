import React, { useState } from "react";
import './Styles/ItemCount.css';

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  function handleAdd() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleSubsctract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    alert(`Se han agregado ${count} productos al carrito`);
  }

  return (
    <div className="cardConteiner">
      <div className="count">
        <h3>Producto</h3>
        <button onClick={handleSubsctract} className="countSub">-</button>
        <span> {count} </span>
        <button onClick={handleAdd} className="countAdd">+</button>
      </div>
      <div className="onAdd">
        <button onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
