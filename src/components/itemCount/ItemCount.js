/*******************************************************
                    Imports
********************************************************/
//Modules
import { useState } from 'react';

//Styles
import './ItemCount.css';

//Components

//Core

/*******************************************************
                    Logic
********************************************************/
const ItemCount = (props) => {
  //props.stock = 7;

  const [count, setCount] = useState(0);

  const addOne = () => {
    if (count < props.stock) {
      setCount(count + 1);

      props.cantidades(count);
    }
  };

  const disOne = () => {
    if (count > 0) {
      setCount(count - 1);

      props.cantidades(count);
    }
  };

  return (
    <div className="box-count">
      <button onClick={addOne}>+</button>
      <p className="box-count-quantity">{count}</p>
      <button onClick={disOne}>-</button>
    </div>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default ItemCount;
