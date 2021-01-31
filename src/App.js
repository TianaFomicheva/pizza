import React  from 'react';
import {Header, PizzaBlock} from './components';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import logo from './logo.svg';
import {Route} from 'react-router-dom'
import './App.css';


function App() {
 
  
   
  return (
    <div className="wrapper">
    <Header />
    <Route path="/" component={Home} exact/>
    <Route path="/cart" component={Cart} exact/>
   
    </div>
  );
}

export default App;
