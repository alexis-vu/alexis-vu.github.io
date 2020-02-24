import React from 'react';
import logo from './logo.svg';

// import BrowserRouter, Route, and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import components
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import PhotoswipeBG from './PhotoswipeBG.js';

// import css files
import './base.css';
import './fonts.css';
import './main.css';
import './vendor.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <About></About>
        {/* <Projects></Projects>*/ }
        <Contact></Contact>
        <Footer></Footer>
        <PhotoswipeBG></PhotoswipeBG>
      </div>
    </BrowserRouter>
  );
}

export default App;
