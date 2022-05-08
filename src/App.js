// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:idcategoria" element={<ItemListContainer />}></Route>
            <Route path="/product/:idproducto" element={<ItemDetailContainer />}></Route>
            <Route path="/cart/" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
