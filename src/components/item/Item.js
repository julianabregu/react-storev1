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
	const { title, category, description, price, id } = props.data;

	return (
		<div className='item-box'>
			<p className='item-category'>{category}</p>
			<p className='item-title'>{title}</p>
			<p className='item-description'>{description}</p>
			<p className='item-price'>${price}</p>
			<Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
			<ItemCount stock={10}></ItemCount>
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default Item;
