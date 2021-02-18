import { NavLink, Link } from 'react-router-dom';
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
                <Link to={`/`} className="navbar-brand m-0">
                    <img src="/images/logo-marron.png" className="navbarLogo" alt="Logo Lakay Design"/> 
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Productos</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to={`/productos/categoria/011213`} className="dropdown-item m-0">Almohadones</Link>
                                <Link to={`/productos/categoria/020114`} className="dropdown-item m-0">Bandejas</Link>
                                <Link to={`/productos/categoria/030113`} className="dropdown-item m-0">Caminos de mesa</Link>
                                <Link to={`/productos/categoria/052017`} className="dropdown-item m-0">Espejos</Link>
                                <Link to={`/productos/categoria/060114`} className="dropdown-item m-0">Fanales</Link>
                                <Link to={`/productos/categoria/130114`} className="dropdown-item m-0">Mantas</Link>
                                <Link to={`/productos`} className="dropdown-item m-0">Ver todos</Link>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/envios`} activeClassName="activeSection" className="nav-link">Envíos</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/nosotros`} activeClassName="activeSection" className="nav-link">Nosotros</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink to={`/contacto`} activeClassName="activeSection" className="nav-link">Contacto</NavLink>
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