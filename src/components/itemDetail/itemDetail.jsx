import './itemDetail.scss';

const ItemDetail = ({ product }) => {

    let { name, price, description, image } = product;

    return (
        <div className="container-fluid mx-0 mt-5">
            <div className="card cardItemDetail p-sm-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} alt="Espejo Awondi"/>
                    </div>
                    <div className="col-md-8 card-body mt-4">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text precio">${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;