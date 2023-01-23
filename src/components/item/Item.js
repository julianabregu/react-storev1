/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './Item.css';

//Components
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
//Core

/*******************************************************
                    Logic
********************************************************/
const Item = props => {
	const { image, title, price, id } = props.data;

	return (
		<div className='item-box'>
			<img src={image} alt={title} className='item-image'></img>
			<p className='item-title'>{title}</p>
			<p className='item-price'>${price}</p>
			<Link to={`/producto/${id}`} className='item-details'>
				{' '}
				Ver Detalle del Producto{' '}
			</Link>
			<ItemCount stock={10}></ItemCount>
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default Item;
