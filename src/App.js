import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadReddits} from './features/popularReddits/popularRedditsSlice';
import './App.css';
import {NavBar} from './components/navBar/NavBar';
import {Search} from './features/searchBar/Search';
import {PopularReddits} from './features/popularReddits/PopularReddits'


function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.popularReddits);

  useEffect(() => {
    dispatch(loadReddits());
  }, [dispatch]);



  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <PopularReddits/>
    </div>
  );
}

export default App;
