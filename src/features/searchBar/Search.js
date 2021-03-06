import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./searchSlice";
import './Search.css';
import {setButtonSubreddit} from '../subreddits/subredditsSlice';


const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg'
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg'

export const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
    dispatch(setButtonSubreddit(''));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id='search-outer-container'>
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchChangeHandler}
                placeholder="Search..."
            />
            {searchTerm !== '' && (
                <button
                    onClick={onSearchTermClearHandler}
                    type="button"
                    id="search-clear-button"
                >
                <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    </div>
  );
};
