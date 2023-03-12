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
import CartProvider from './context/CartContext';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
import Cart from './components/cart/Cart';
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
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemCategoryContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
