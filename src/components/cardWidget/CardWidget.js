/*******************************************************
                    Imports
********************************************************/
// Estilos
import "./CardWidget.css";

/*******************************************************
                    Logic
********************************************************/
const CardWidget = (props) => {
  return (
    <a href="/cart" className="cart">
      {props.quantity}
      <i className="material-icons">shopping_cart</i>
    </a>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default CardWidget;
