/*******************************************************
                    Imports
********************************************************/
//Modules
import { Link } from 'react-router-dom';
//Styles
import './Navbar.css';

//Components
import CardWidget from '../cardWidget/CardWidget';
import logo from '../../images/black-logo.png';

//Core

/*******************************************************
                    Logic
********************************************************/
const Navbar = () => {
	return (
		<header className='nav'>
			<div className='nav-links'>
				<div className='nav-logo'>
					<Link to='/'>
						<img src={logo} alt='logo' className='logo'></img>
					</Link>
				</div>
				<div>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/productos'>Productos ▾</Link>
							<ul className='dropdown'>
								<li>
									<a href='#a'>Men's Clothing</a>
								</li>
								<li>
									<a href='#a'>Women's Clothing</a>
								</li>
								<li>
									<a href='#a'>Jewelery</a>
								</li>
								<li>
									<a href='#a'>Electronics</a>
								</li>
							</ul>
						</li>
						<li>
							<Link to='/nosotros'>Nosotros</Link>
						</li>
					</ul>
				</div>
				<div className='nav-icons'>
					<ul>
						<li>
							<a href='#a'>
								<span className='material-icons'>search</span>
							</a>
						</li>
						<li>
							<a href='#a'>
								<span className='material-icons'>person</span>
							</a>
						</li>
						<li>
							<a href='#a'>
								<CardWidget quantity='10' />
							</a>
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
