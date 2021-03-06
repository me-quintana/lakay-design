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
import Nosotros from './components/nosotros/nosotros.jsx';
import CartContainer from './containers/cartContainer/cartContainer.jsx';
import CartProvider from './context/cartContext/cartContext.jsx';
import Checkout from './components/checkout/checkout.jsx';

const App = () => {
  return (
    <CartProvider>
      
      <Router>

        <Navbar/>

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/productos/categoria/:categoryID" component={ItemListContainer}/>

          <Route exact path="/productos" component={ItemListContainer}/>

          <Route exact path="/productos/:itemID" component={ItemDetailContainer}/>

          <Route exact path="/carrito" component={CartContainer}/>

          <Route exact path="/checkout" component={Checkout}/>

          <Route exact path="/nosotros" component={Nosotros}/>

          <Route path="*" children={<div className="d-flex justify-content-center my-5"><img src="/images/404.jpg" alt="Error 404"/></div>}/>

        </Switch>

        <Footer/>

      </Router>
    
    </CartProvider>
  );
};

export default App;