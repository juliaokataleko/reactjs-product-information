import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


import Header from './components/Header'
import Footer from './components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';


function App() {
  return (
    <div className="relative pb-10 min-h-screen">

      <Router>
        <Header />
        
        <div className="p-3 max-w-md m-auto">
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
        </Switch>
        </div>
        

        <Footer />
      </Router>

    </div>
  );
}

export default App;
