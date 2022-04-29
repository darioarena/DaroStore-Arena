import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsDB from "../data/productsDB";
import ItemDetail from "./ItemDetail";

function getDetail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productId = productsDB.find((product) => {
        return parseInt(id) === product.id;
      });
      resolve(productId);
      reject(new Error("Error al solicitar datos"));
    }, 500);
  });
}

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { idproducto } = useParams();

  useEffect(() => {
    getDetail(idproducto)
      .then((respuestaPromise) => {
        setProduct(respuestaPromise);
      })
      .catch((errorPromise) => console.error(errorPromise));
  }, [idproducto]);
  return <ItemDetail producto={product} />;
}

export default ItemDetailContainer;
