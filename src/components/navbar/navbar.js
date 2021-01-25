import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css';

const Navbar = () => {
    return (
        <div className="container-fluid sticky-top sectionBrown p-0">
            <nav className="navbar navbar-expand-lg px-3 py-0">
                <a className="navbar-brand" href="#">
                    <img src="/images/logo-marron.png" className="navbarLogo" alt="Logo Lakay Design"/> 
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Almohadones</a></li>
                                <li><a className="dropdown-item" href="#">Caminos de mesa</a></li>
                                <li><a className="dropdown-item" href="#">Espejos</a></li>
                                <li><a className="dropdown-item" href="#">Fanales</a></li>
                                <li><a className="dropdown-item" href="#">Mantas</a></li>
                                <li><a className="dropdown-item" href="#">Tapices</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Envíos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar..."/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <FontAwesomeIcon icon="search"/>
                        </button>
                    </form>
                    <div>
                        <i className="fas fa-comments"></i>
                        <i className="fas fa-headset"></i>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-user"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;