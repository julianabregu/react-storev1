/*******************************************************
                    Imports
********************************************************/
//Modules
import { Link } from 'react-router-dom';
//Styles
import './NavBar.css';

//Components
import CardWidget from '../cardWidget/CardWidget';

//Core

/*******************************************************
                    Logic
********************************************************/
const NavBar = () => {
	return (
		<header className='header'>
			<a href='#a' className='logo'>
				TechStore
			</a>
			<ul className='menu'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/productos'>Productos</Link>
				</li>
				<li>
					<Link to='/nosotros'>Nosotros</Link>
				</li>
				<li>
					<a href='#a'>
						<CardWidget quantity='10' />
					</a>
				</li>
			</ul>
		</header>
	);
};

/*******************************************************
                    Exports
********************************************************/
export default NavBar;
