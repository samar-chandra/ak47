import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Services from './components/pages/services';
import Products from './components/pages/products';
import SignUp from './components/pages/signup';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home}/>
        <Route path='/services'exact component={Services}/>
        <Route path='/products'exact component={Products}/>
        <Route path='/signup'exact component={SignUp}/>
      </Switch>
      <HeroSection/>
      <Cards/>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
