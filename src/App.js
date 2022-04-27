// import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer id={1}/>
    </div>
  );
}

export default App;
