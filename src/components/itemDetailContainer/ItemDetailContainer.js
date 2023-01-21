/*******************************************************
                    Imports
********************************************************/
//Modules
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Styles
import './ItemDetailContainer.css';

//Components
import ItemDetail from '../itemDetail/ItemDetail';
//Core

/*******************************************************
                    Logic
********************************************************/
const ItemDetailContainer = () => {
	const [products, setProducts] = useState([]);

	const { productoId } = useParams();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${productoId}`)
			.then(res => res.json())
			.then(products =>
				setProducts(
					<ItemDetail
						key={products.id}
						id={'product' + products.id}
						data={products}
					/>
				)
			);
	}, [productoId]);

	return (
		<section className='itemDetail-box'>
			<Link to='/productos'>Volver a mis productos</Link>
			{products}
		</section>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default ItemDetailContainer;
