import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import CartWidget from '../cartWidget/cartWidget.jsx';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const { cartQuantity } = useCartContext();

    return (
        <nav className="navbar navbar-expand-lg d-block sectionBrown p-2">
            <div className="container-fluid d-flex align-items-baseline">
                <Link to={`/`} className="navbar-brand">
                    <img src="/images/logo-marron.png" className="navbarLogo" alt="Logo Lakay Design"/> 
                </Link>
                <div className="d-lg-none cartIcon">
                    <CartWidget/>
                    {cartQuantity > 0 &&
                        <p className="cartQuantity">{cartQuantity}</p>
                    }
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} id="burgerMenuIcon"/>
                </button>
                <div id="iconsContainer">
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
                        {cartQuantity > 0 &&
                            <p className="cartQuantity">{cartQuantity}</p>
                        }
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="categoriesContainer">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li><NavLink to={`/productos/categoria/011213`} activeClassName="activeSection" className="mx-3">Almohadones</NavLink></li>
                        <li><NavLink to={`/productos/categoria/020114`} activeClassName="activeSection" className="mx-3">Bandejas</NavLink></li>
                        <li><NavLink to={`/productos/categoria/030113`} activeClassName="activeSection" className="mx-3">Caminos de mesa</NavLink></li>
                        <li><NavLink to={`/productos/categoria/052017`} activeClassName="activeSection" className="mx-3">Espejos</NavLink></li>
                        <li><NavLink to={`/productos/categoria/060114`} activeClassName="activeSection" className="mx-3">Fanales</NavLink></li>
                        <li><NavLink to={`/productos/categoria/130114`} activeClassName="activeSection" className="mx-3">Mantas</NavLink></li>
                        <li><Link to={`/productos`} className="mx-3">Ver todos</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;