/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './SearchWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//Components

//Core

/*******************************************************
                    Logic
********************************************************/
const SearchWidget = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default SearchWidget;
