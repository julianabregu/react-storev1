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
	const { title, category, description, price } = props.data;

	return (
		<article className='itemDetail-product'>
			<div className='item-box'>
				<p className='item-category'>{category}</p>
				<p className='item-title'>{title}</p>
				<p className='item-description'>{description}</p>
				<p className='item-price'>${price}</p>
				<ItemCount stock={10}></ItemCount>
			</div>
		</article>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default ItemDetail;
