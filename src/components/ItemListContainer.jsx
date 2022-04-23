import React, { useEffect, useState } from "react";
import productsDB from "../data/productsDB";
import ItemList from "./ItemList";

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productsDB);
      reject(new Error("Error al solicitar datos"));
    }, 2000);
  });
}

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuestaPromise) => {
        setProducts(respuestaPromise);
      })
      .catch((errorPromise) => console.error(errorPromise));
  }, []);
  return (
  <ItemList productos={products} />
  );
}

export default ItemListContainer;
