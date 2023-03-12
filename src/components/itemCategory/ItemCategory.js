/*******************************************************
                    Imports
********************************************************/
//Modules
import { useState, useEffect } from 'react';

//Styles
import './ItemCategory.css';

//Components
import Item from '../item/Item';

//Core

/*******************************************************
                    Logic
********************************************************/

const ItemCategory = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((json) =>
        setProducts(json.map((products) => <Item key={products.id} id={'product' + products.id} data={products} />))
      );
  }, [products, props.category]);

  return <div className="products-list">{products}</div>;
};

/*******************************************************
                    Exports
********************************************************/
export default ItemCategory;
