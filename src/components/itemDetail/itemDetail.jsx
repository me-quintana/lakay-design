import './itemDetail.scss';


const ItemDetail = ({ products }) => {

    return (
        <div className="container-fluid mx-0 mt-5">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="/images/espejo.jpg" alt="Espejo Awondi"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Espejo Awondi</h5>
                            <p className="card-text">Espejo de pared redondo (50cm de diámetro) con marco superior de cobre.</p>
                            <p className="card-text precio">$123</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;