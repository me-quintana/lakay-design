import './home.scss';

const Home = () => {
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/images/deco1.jpg" alt="Imagen carousel 1"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/images/deco2.jpg" alt="Imagen carousel 2"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/images/deco3.jpg" alt="Imagen carousel 3"/>
                </div>
            </div>
        </div>

        <div className="container-fluid my-5">
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col text-center px-4">
                    <img src="/images/whatsapp.png" className="img-fluid homeIcon mb-3" alt="Ícono Whatsapp"/>
                    <h6 className="homeTitle">Escribinos por Whatsapp</h6>
                    <p className="d-md-none d-lg-block homeText">Respondemos a tus consultas de manera personalizada</p>
                </div>
                <div className="col text-center px-4">
                    <img src="/images/card.png" className="img-fluid homeIcon mb-3" alt="Ícono tarjeta"/>
                    <h6 className="homeTitle">Pagá en cuotas</h6>
                    <p className="d-md-none d-lg-block homeText">Aceptamos todas las tarjetas con hasta 6 cuotas sin interés</p>
                </div>
                <div className="col text-center px-4">
                    <img src="/images/security.png" className="img-fluid homeIcon mb-3" alt="Ícono seguridad"/>
                    <h6 className="homeTitle">Compra segura</h6>
                    <p className="d-md-none d-lg-block homeText">Toda la información del sitio está protegida</p>
                </div>
            </div>
        </div>

        <div className="container-fluid text-center p-5" id="tuHogar">
            <div className="row pb-1">
                <div className="col-12">
                    <h3>Lakay Desing en tu hogar</h3>
                </div>
            </div>
            <div className="row pb-2">
                <div className="col-12 d-flex justify-content-center">
                    <p>Compartí la belleza de tus espacios</p>
                </div>
            </div>
            <div className="container p-0" id="fotosTuHogar">
                <img src="/images/LDhogar1.jpg" className="img-fluid" alt="LD en tu hogar 1"/>
                <img src="/images/LDhogar2.jpg" className="img-fluid" alt="LD en tu hogar 2"/>
                <img src="/images/LDhogar3.jpg" className="img-fluid" alt="LD en tu hogar 3"/>
                <img src="/images/LDhogar4.jpg" className="img-fluid" alt="LD en tu hogar 4"/>			
            </div>
	    </div>
    </>
    );
};

export default Home;