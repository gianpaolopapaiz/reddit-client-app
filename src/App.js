import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadReddits} from './features/popularReddits/popularRedditsSlice';
import './App.css';
import {loadSubreddits} from './features/subreddits/subredditsSlice'
import {NavBar} from './components/navBar/NavBar';
import {Search} from './features/searchBar/Search';
import {PopularReddits} from './features/popularReddits/PopularReddits'
import {selectSearchTerm} from "./features/searchBar/searchSlice";
import {selectButtonSubreddit} from "./features/subreddits/subredditsSlice";
import {Subreddits} from './features/subreddits/Subreddits';


function App() {
  const dispatch = useDispatch();
  //const { hasError } = useSelector((state) => state.popularReddits);
  const searchTerm = useSelector(selectSearchTerm);
  const buttonSubreddit = useSelector(selectButtonSubreddit);

  useEffect(() => {
    dispatch(loadReddits([searchTerm, buttonSubreddit]));
  }, [dispatch, searchTerm, buttonSubreddit]);

  useEffect(() => {
    dispatch(loadSubreddits());
  });

  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <main>
        <PopularReddits/>
        <Subreddits/>
      </main>
      
    </div>
  );
}

export default App;
