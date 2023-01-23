/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './ItemListContainer.css';

//Components
import ItemList from '../itemList/ItemList';

//Core

/*******************************************************
                    Logic
********************************************************/
const ItemListContainer = props => {
	return (
		<div className='main-section'>
			<p>{props.greeting}</p>
			<div>
				<h1>Todos los productos</h1>
			</div>
			<ItemList />
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default ItemListContainer;
