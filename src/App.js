import React from 'react';
import './App.css';
import {NavBar} from './components/navBar/NavBar';
import {Search} from './features/searchBar/Search';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
    </div>
  );
}

export default App;
