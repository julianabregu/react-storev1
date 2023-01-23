/*******************************************************
                    Imports
********************************************************/

//Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Styles
import './index.css';

//Components
// import App from "./App";
import Navbar from './components/navbar/Navbar';
// import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';

//Core
import reportWebVitals from './reportWebVitals';

/*******************************************************
                    Logic
********************************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route exact path='/' element={<ItemListContainer />} />
				<Route exact path='/productos' element={<ItemListContainer />} />
				<Route
					exact
					path='/producto/:productoId'
					element={<ItemDetailContainer />}
				/>
				<Route exact path='/nosotros' element={<AboutUs />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
