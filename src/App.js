import React, { Component} from 'react';
import { Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Home from './components/Home';
import Modal from './components/Modal';
import About from './components/About';



function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Switch>
         <Route exact path="/" component={Home}></Route>
        <Route exact path="/ProductList" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/About" component={About}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal></Modal>
     
    </React.Fragment>
  );
}

export default App;
