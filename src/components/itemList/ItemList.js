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

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) =>
        setProducts(json.map((products) => <Item key={products.id} id={'product' + products.id} data={products} />))
      );
  }, []);

  return <div className="products-list">{products}</div>;
};

/*******************************************************
                    Exports
********************************************************/
export default ItemList;
