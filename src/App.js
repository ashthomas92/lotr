import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Books from './components/Books.js';
import Movies from './components/Movies.js';
import Movie from './components/Movie.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movie/:id" exact component={Movie} />
      </Router>
    </div>
  );
}

export default App;
