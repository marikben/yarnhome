import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home'; 
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
