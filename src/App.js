// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemCount from "./components/ItemCount"


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='AQUI IRA EL CATALOGO DEL ECOMMERCE' />
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
