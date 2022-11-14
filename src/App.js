import React from 'react';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
// import About from './About';
import Services from './Services';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Footer from './Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        {/* <Route exact path="/about" component={About}></Route> */}
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
