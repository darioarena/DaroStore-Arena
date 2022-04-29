// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:idcategoria" element={<ItemListContainer />}></Route>
          <Route path="/product/:idproducto" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
