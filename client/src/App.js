import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route path='/Gestion_Medica' exact component={Home}/>
            <Route path='/Gestion_Medica/reports' component={Reports}/>
            <Route path='/Gestion_Medica/products' component={Products}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
