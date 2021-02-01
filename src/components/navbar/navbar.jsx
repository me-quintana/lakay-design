import './navbar.scss';
import Cart from '../cart/cart.jsx';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="container-fluid sticky-top sectionBrown p-0">
            <nav className="navbar navbar-expand-lg px-3 py-0">
                <a className="navbar-brand m-0" href="#">
                    <img src="/images/logo-marron.png" className="navbarLogo" alt="Logo Lakay Design"/> 
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Productos</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item m-0" href="#">Almohadones</a>
                                <a className="dropdown-item m-0" href="#">Caminos de mesa</a>
                                <a className="dropdown-item m-0" href="#">Espejos</a>
                                <a className="dropdown-item m-0" href="#">Fanales</a>
                                <a className="dropdown-item m-0" href="#">Mantas</a>
                                <a className="dropdown-item m-0" href="#">Tapices</a>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Envíos</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Nosotros</a>
                        </li>
                    </ul>
                    <form className="form-inline d-none d-xl-block my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar..."/>
                        <button className="btn searchBtn my-2 my-sm-0" type="submit">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>
                    <div className="navbarIconsSection ml-xl-3">
                        <a className="navbarIcon">
                            <FontAwesomeIcon icon={faHeadset} type="button" href="#" className="iconFontAwesone"/>
                            <p className="m-0">Ayuda</p>
                        </a>
                        <a className="navbarIcon">
                            <FontAwesomeIcon icon={faUser} type="button" href="#" className="iconFontAwesone"/>
                            <p className="m-0">Mi cuenta</p>
                        </a>
                        <Cart/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;