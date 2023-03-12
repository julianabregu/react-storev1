/*******************************************************
                    Imports
********************************************************/
//Modules

//Styles
import './UserWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

//Components

//Core

/*******************************************************
                    Logic
********************************************************/
const UserWidget = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faUser} />
    </span>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default UserWidget;
