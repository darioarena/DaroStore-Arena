import React, { useEffect, useState } from "react";
import productsDB from "../data/productsDB";
import ItemDetail from "./ItemDetail";

function getDetail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productId = productsDB.find((product) => {
        return id === product.id;
      });
      resolve(productId);
      reject(new Error("Error al solicitar datos"));
    }, 2000);
  });
}

function ItemDetailContainer({ id }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getDetail(id)
      .then((respuestaPromise) => {
        setProduct(respuestaPromise);
      })
      .catch((errorPromise) => console.error(errorPromise));
  }, []);
  return <ItemDetail producto={product} />;
}

export default ItemDetailContainer;
