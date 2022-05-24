import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItemDetail as getDetail } from "../data/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
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
