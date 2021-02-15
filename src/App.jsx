import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/home/home.jsx';
import ItemListContainer from './containers/itemListContainer/itemListContainer.jsx';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx';
import Envios from './components/envios/envios.jsx';
import Nosotros from './components/nosotros/nosotros.jsx';
import Contacto from './components/contacto/contacto.jsx';

const App = () => {
  return (
    <Router>

      <Navbar/>

      <Switch>

        <Route exact path="/" component={Home}/>

        <Route exact path="/productos/categoria/:categoryID" component={ItemListContainer}/>

        <Route exact path="/productos" component={ItemListContainer}/>

        <Route exact path="/productos/:itemID" component={ItemDetailContainer}/>

        <Route exact path="/cart">
          <ItemDetailContainer/>
        </Route>

        <Route exact path="/checkout">
          <ItemDetailContainer/>
        </Route>

        <Route exact path="/envios" component={Envios}/>

        <Route exact path="/nosotros" component={Nosotros}/>

        <Route exact path="/contacto" component={Contacto}/>

        <Route path="*" children={<div className="d-flex justify-content-center my-5"><img src="/images/404.jpg"/></div>}/>

      </Switch>

      <Footer/>

    </Router>
  );
};

export default App;