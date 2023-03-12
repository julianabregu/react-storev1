/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './ItemCategoryContainer.css';

//Components
import { useParams } from 'react-router-dom';
import ItemCategory from '../itemCategory/ItemCategory.js';
//Core

/*******************************************************
                    Logic
********************************************************/
const ItemCategoryContainer = () => {
  const { categoryId } = useParams();

  return (
    <div className="main-section">
      <div>
        <h1 className="category-title">{categoryId}</h1>
      </div>
      <ItemCategory category={categoryId} />
    </div>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default ItemCategoryContainer;
