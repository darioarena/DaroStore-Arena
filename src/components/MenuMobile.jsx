import React from "react";
import { Link } from "react-router-dom";
import "./Styles/NavBar.css";

function MenuMobile() {
  return (
    <div className="menum">
      <li>
        <Link to="/" className="opmobile">
          Todos los Productos
        </Link>
      </li>
      <li>
        <Link to="/category/Notebooks" className="opmobile">
          Notebooks
        </Link>
      </li>
      <li>
        <Link to="/category/Perifericos" className="opmobile">
          Perifericos
        </Link>
      </li>
      <li>
        <Link to="/category/Mobiliario" className="opmobile">
          Mobiliario
        </Link>
      </li>
    </div>
  );
}

export default MenuMobile;
