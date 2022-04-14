// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='AQUI IRA EL CATALOGO DEL ECOMMERCE' />
    </div>
  );
}

export default App;
