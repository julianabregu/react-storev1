/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './Item.css';

//Components
import { Link } from 'react-router-dom';
//Core

/*******************************************************
                    Logic
********************************************************/
const Item = (props) => {
  const { image, title, price, id } = props.data;

  return (
    <div className="item-box">
      <img src={image} alt={title} className="item-image"></img>
      <div className="align-price-details">
        <p className="item-title">{title}</p>
        <p className="item-price">${price}</p>
        <Link to={`/product/${id}`} className="item-details">
          Show details
        </Link>
      </div>
    </div>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default Item;
