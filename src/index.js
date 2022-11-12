import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Footer from './Footer';
// import About from './About';
// import Home from './Home';
// import Services from './Services';
// import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <Footer/> */}
    {/* <Home/> */}
    {/* <Services/>
    <About/>
    <Contact/> */}

  </BrowserRouter>
);