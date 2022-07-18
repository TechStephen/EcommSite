import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from './Components/Navigation';
import Products from './Components/Product/Products';

var cartAmount = 3;

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

const Home = () => (
  <>
    <Navigation cartAmount={cartAmount}/>
    <Products />
  </>
)

export default App;
