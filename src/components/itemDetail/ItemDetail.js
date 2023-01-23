/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './ItemDetail.css';

//Components
import ItemCount from '../itemCount/ItemCount';
//Core

/*******************************************************
                    Logic
********************************************************/
const ItemDetail = props => {
	const { category, image, title, description, price } = props.data;

	return (
		<div className='item-detail-box'>
			<p className='item-detail-category'>{category}</p>
			<img src={image} alt={title} className='item-image'></img>
			<p className='item-detail-title'>{title}</p>
			<p className='item-detail-description'>{description}</p>
			<p className='item-detail-price'>${price}</p>
			<ItemCount stock={10}></ItemCount>
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default ItemDetail;
