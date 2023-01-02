/*******************************************************
                    Imports
********************************************************/

//Modules
import React from "react";
import ReactDOM from "react-dom/client";

//Styles
import "./index.css";

//Components
// import App from "./App";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Footer from "./components/footer/Footer";

//Core
import reportWebVitals from "./reportWebVitals";

/*******************************************************
                    Logic
********************************************************/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting="Hola mundo" />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
