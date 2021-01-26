import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/index.js';
import ItemListContainer from './containers/itemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Acá van a mostrarse los productos de la tienda"}/>
    </>
  );
};

export default App;