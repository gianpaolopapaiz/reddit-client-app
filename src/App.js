import React from 'react';
import './App.css';
import {NavBar} from './components/navBar/NavBar';
import {Search} from './features/searchBar/Search';
import {PopularReddits} from './features/popularReddits/PopularReddits'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <PopularReddits />
    </div>
  );
}

export default App;
