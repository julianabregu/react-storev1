/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './ItemDetail.css';

//Components
import ItemCount from '../itemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
//Core

/*******************************************************
                    Logic
********************************************************/
const ItemDetail = (props) => {
  const [cantidad, setCantidad] = useState(0);

  const { id, category, image, title, description, price } = props.data;

  const { agregarAlCarrito } = useCartContext();

  const tomarCantidad = (numero) => {
    setCantidad(numero);
  };

  const onAdd = () => {
    if (cantidad !== 0) {
      const product = {
        id: id,
        title: title,
        category: category,
        price: price,
        count: cantidad,
      };
      agregarAlCarrito(product);
    } else {
      alert('Por favor añadí un producto para continuar.');
    }
  };

  return (
    <div className="item-detail-box">
      <div className="item-image-box">
        <img src={image} alt={title} className="item-detail-image"></img>
      </div>
      <div className="item-title-box">
        <small>Titulo</small>
        <p className="item-detail-title">{title}</p>
      </div>
      <div className="item-description-box">
        <small>Descripcion</small>
        <p className="item-detail-description">{description}</p>
      </div>
      <div className="item-price-box">
        <small>Precio</small>
        <p className="item-detail-price">${price}</p>
      </div>
      <div className="item-button-box">
        <ItemCount stock={10} cantidades={tomarCantidad}></ItemCount>
        <button onClick={onAdd} className="add-button">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default ItemDetail;
