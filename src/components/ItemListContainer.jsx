import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllItems as getProducts, getItemsCategory } from "../data/firebase";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { idcategoria } = useParams();

  useEffect(() => {
    if (idcategoria === undefined) {
      getProducts()
        .then((respuestaPromise) => {
          setProducts(respuestaPromise);
        })
        .catch((errorPromise) => console.error(errorPromise));
    } else {
      getItemsCategory(idcategoria)
        .then((respuestaPromise) => {
          setProducts(respuestaPromise);
        })
        .catch((errorPromise) => console.error(errorPromise));
    }
  }, [idcategoria]);
  return (
    <div>
      <ItemList productos={products} />
    </div>
  );
}

export default ItemListContainer;
