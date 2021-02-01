import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar.jsx';
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  );
};

export default App;