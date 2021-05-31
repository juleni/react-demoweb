import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Views/About';
import Home from './Views/Home';
import Product from './Views/Product';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>

        <Header/>

        <div className="p-3">
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/products/:id">
              <Product/>
            </Route>

          </Switch> 
        </div>
        <Footer/>

      </Router>

    </div>
  )
}

export default App;
