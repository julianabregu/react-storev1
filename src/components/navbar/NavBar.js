/*******************************************************
                    Imports
********************************************************/
// Estilos
import "./NavBar.css";
import CardWidget from "../cardWidget/CardWidget";

/*******************************************************
                    Logic
********************************************************/
const NavBar = () => {
  return (
    <header className="navbar">
      <h1 className="brand">TechStore</h1>
      <nav>
        <ul>
          <li>
            <a href="/home">Inicio</a>
            <a href="/products">Productos</a>
            <a href="/about">Nosotros</a>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <CardWidget quantity="10" />
    </header>
  );
};

/*******************************************************
                    Exports
********************************************************/
export default NavBar;
