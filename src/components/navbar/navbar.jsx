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
                <div className="d-flex d-lg-none">
                    <Cart/>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="navbar-nav text-right mr-auto">
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
                        <NavLink to={`/envios`} activeClassName="activeSection" className="nav-link">Envíos</NavLink>
                        <NavLink to={`/nosotros`} activeClassName="activeSection" className="nav-link">Nosotros</NavLink>
                        <NavLink to={`/contacto`} activeClassName="activeSection" className="nav-link">Contacto</NavLink>
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-baseline">
                    <form className="form-inline align-self-center d-none d-xl-block my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar..."/>
                        <button className="btn searchBtn my-2 my-sm-0 pl-0" type="submit">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>
                    <div className="navbarIconsSection">
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