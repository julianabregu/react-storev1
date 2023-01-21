/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './CardWidget.css';

//Components

//Core

/*******************************************************
                    Logic
********************************************************/
const CardWidget = props => {
	return (
		<div className='cart-box'>
			<span className='material-icons'>shopping_cart</span>
			<p>{props.quantity}</p>
		</div>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default CardWidget;
