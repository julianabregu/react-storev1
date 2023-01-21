/*******************************************************
                    Imports
********************************************************/
//Modules
import { useState, useEffect } from 'react';

//Styles
import './ItemList.css';

//Components
import Item from '../item/Item';

//Core

/*******************************************************
                    Logic
********************************************************/

const ItemList = props => {
	const [products, setProducts] = useState([]);

	//API de productos
	// para JSON cambiar lo q esta dentro de fetch => '../../products.json'

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json =>
				setProducts(
					json.map(products => (
						<Item
							key={products.id}
							id={'product' + products.id}
							data={products}
						/>
					))
				)
			);
	}, []);

	return (
		<div>
			<p>Este es el Item List</p>
			{products}
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default ItemList;
