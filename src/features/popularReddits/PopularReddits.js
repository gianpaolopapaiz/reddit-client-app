import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularReddits } from "./popularRedditsSlice";
import {selectSearchTerm} from "../searchBar/searchSlice";
import { Reddit } from '../../components/Reddit/Reddit'
import './PopularReddits.css';
import {selectButtonSubreddit} from "../subreddits/subredditsSlice";

export const PopularReddits = () => {
  const dispatch = useDispatch();
  const popularReddits = useSelector(selectPopularReddits);
  const { isLoading } = useSelector((state) => state.popularReddits);
  const searchTerm = useSelector(selectSearchTerm);
  const buttonSubreddit = useSelector(selectButtonSubreddit); 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
      <div className="reddits-container">     
        <h2>{searchTerm === '' ? buttonSubreddit === ''? 'Popular Reddits' : `SubReddit: ${buttonSubreddit}` : `Search: ${searchTerm}`}</h2>
        {popularReddits.map( (reddit) => (
          <Reddit reddit={reddit}/>))} 
      </div>
  );
};

