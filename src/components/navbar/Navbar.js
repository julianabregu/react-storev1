/*******************************************************
                    Imports
********************************************************/
//Modules
import { Link } from 'react-router-dom';
//Styles
import './Navbar.css';

//Components
import CardWidget from '../cardWidget/CardWidget';
import logo from '../../images/white-logo.png';
import UserWidget from '../userWidget/UserWidget';
import SearchWidget from '../searchWidget/SearchWidget';

//Core

/*******************************************************
                    Logic
********************************************************/
const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav-links">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="logo"></img>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/products">Productos ▾</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/category/men's clothing">Men's Clothing</Link>
                </li>
                <li>
                  <Link to="/category/women's clothing">Women's Clothing</Link>
                </li>
                <li>
                  <Link to="/category/jewelery">Jewelery</Link>
                </li>
                <li>
                  <Link to="/category/electronics">Electronics</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <ul>
            <li>
              <a href="#a">
                <SearchWidget />
              </a>
            </li>
            <li>
              <a href="#a">
                <UserWidget />
              </a>
            </li>
            <li>
              <Link to="/cart">
                <CardWidget quantity="10" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default Navbar;
