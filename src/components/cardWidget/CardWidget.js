/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './CardWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

//Components

//Core

/*******************************************************
                    Logic
********************************************************/
const CardWidget = (props) => {
  return (
    <div className="cart-box">
      <span>
        <FontAwesomeIcon icon={faBagShopping} />
      </span>
      <p>{props.quantity}</p>
    </div>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default CardWidget;
