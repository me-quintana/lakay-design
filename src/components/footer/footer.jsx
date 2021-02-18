import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="container-fluid px-0 py-3">
			    <div className="footerDiv mb-5 mb-sm-0">
			        <Link to={`/`}>
                        <img src="/images/logo-marron.png" className="footerLogo" alt="Logo Lakay Design"/> 
			        </Link>
		        </div>
			    <div className="footerDiv mb-5 mb-md-0">
                    <h6>Conocé más</h6>
                    <Link to={`/productos`}>Productos</Link><br/>
                    <a href="#">Sucursales</a><br/>
                    <Link to={`/envios`}>Envíos</Link><br/>
                    <a href="#">Gift cards</a><br/>
                    <a href="#">Cambios y devoluciones</a><br/>
                    <a href="#">Mayorista</a>
                </div>
			    <div className="footerDiv mb-5 mb-md-0">
			        <h6>Lakay Design</h6>
				    <Link to={`/nosotros`}>Nosotros</Link><br/>
			        <Link to={`/contacto`}>Contacto</Link><br/>
			        <a href="#">Sumate a nuestro equipo</a><br/>
			        <a href="#">Términos y Condiciones</a>
		        </div>
			    <div className="footerDiv mb-5 mb-md-0">
				    <h6>Seguinos en</h6>
                    <a href="https://www.facebook.com/">
                        <img src="/images/facebook.png" className="footerIcon mr-3" alt="Ícono Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src="/images/instagram.png" className="footerIcon mr-3" alt="Ícono Instagram"/>
                    </a>
                    <a href="https://ar.pinterest.com/">
                        <img src="/images/pinterest.png" className="footerIcon" alt="Ícono Pinterest"/>
                    </a>
                </div>
	        </footer>
        </>
    );
};

export default Footer;