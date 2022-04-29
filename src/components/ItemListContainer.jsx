import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsDB from "../data/productsDB";
import ItemList from "./ItemList";


function getProducts(idcategoria) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(idcategoria !== undefined){
        const productosFiltrados = productsDB.filter((producto)=>{
          return producto.category === idcategoria;
        })
        resolve(productosFiltrados);
      }
      else{
        resolve(productsDB);
      }
      reject(new Error("Error al solicitar datos"));
    }, 500);
  });
}


function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const {idcategoria}=useParams();

  useEffect(() => {
    getProducts(idcategoria)
      .then((respuestaPromise) => {
        setProducts(respuestaPromise);
      })
      .catch((errorPromise) => console.error(errorPromise));
  }, [idcategoria]);
  return (
    <div>
      <ItemList productos={products} />
    </div>
  
  );
}

export default ItemListContainer;
