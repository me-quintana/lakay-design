import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import CartWidget from '../cartWidget/cartWidget.jsx';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sectionBrown p-2">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand">
                    <img src="/images/logo-marron.png" className="navbarLogo" alt="Logo Lakay Design"/> 
                </Link>
                <div className="d-lg-none cartIcon">
                    <CartWidget/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} id="burgerMenuIcon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mr-lg-3" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Productos</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to={`/productos/categoria/011213`} className="dropdown-item">Almohadones</Link></li>
                                <li><Link to={`/productos/categoria/020114`} className="dropdown-item">Bandejas</Link></li>
                                <li><Link to={`/productos/categoria/030113`} className="dropdown-item">Caminos de mesa</Link></li>
                                <li><Link to={`/productos/categoria/052017`} className="dropdown-item">Espejos</Link></li>
                                <li><Link to={`/productos/categoria/060114`} className="dropdown-item">Fanales</Link></li>
                                <li><Link to={`/productos/categoria/130114`} className="dropdown-item">Mantas</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to={`/productos`} className="dropdown-item">Ver todos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><NavLink to={`/envios`} activeClassName="activeSection" className="nav-link mr-lg-3">Envíos</NavLink></li>
                        <li className="nav-item"><NavLink to={`/nosotros`} activeClassName="activeSection" className="nav-link mr-lg-3">Nosotros</NavLink></li>
                        <li className="nav-item"><NavLink to={`/contacto`} activeClassName="activeSection" className="nav-link mr-lg-3">Contacto</NavLink></li>
                    </ul>
                </div>
                <form className="d-none d-xl-flex input-group w-auto ml-5 mr-3">
                    <input type="search" className="form-control mr-2" placeholder="Buscar..." aria-label="Search"/>
                    <button className="btn" id="searchButton" type="button" data-ripple-color="dark">
                        <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
                    </button>
                </form>
                <div className="d-none navbarIconSection">
                    <a className="navbarIcon p-2">
                        <FontAwesomeIcon icon={faHeadset} type="button" className="iconFontAwesone"/>
                        <p className="m-0">Ayuda</p>
                    </a>
                    <a className="navbarIcon p-2">
                        <FontAwesomeIcon icon={faUser} type="button" className="iconFontAwesone"/>
                        <p className="m-0">Mi cuenta</p>
                    </a>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;