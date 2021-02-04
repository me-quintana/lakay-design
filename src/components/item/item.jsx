import './item.scss';

const Item = ({ products }) => {
    return (
        <div className="col mb-4">
            <div className="card shadow">
                <img src="Imagenes/elegidos_1.jpg" className="card-img-top img-fluid" alt="Bondiola con papines"/>
                <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text">{products.stock}</p>
                </div>
                <div className="card-footer">
                    <p className="precio">${products.price}</p>
                    <button type="button" className="btn shadow-sm mainBtn seleccionarProducto" data-id="1">Seleccionar</button>
                </div>
            </div>
        </div>
    );
};

export default Item;