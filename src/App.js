import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutCompany from "./components /aboutCompany";
import Brand from "./components /brand";
import Content from "./components /content";
import Footer from "./components /footer";
import Header from "./components /header";
import InfoProduct from "./components /infoProduct";
import MainWindow from "./components /mainWindow";

const App = () => (
    <div className="App">
          <Header/>
          <MainWindow/>
          <Brand/>
          <Content/>
          <AboutCompany/>
          <InfoProduct/>
          <Footer/>
    </div>
);

export default App;
