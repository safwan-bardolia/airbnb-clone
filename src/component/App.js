import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage  from './SearchPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (

    // BEM
    <div className="app">

      <BrowserRouter>
      
        <Header />

        <Switch>
          
          <Route path="/search">
            <SearchPage/>          
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>      

        <Footer/>
     
      </BrowserRouter>

    </div>
  );
}

export default App;
