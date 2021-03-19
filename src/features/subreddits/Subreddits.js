import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddits, setButtonSubreddit } from "./subredditsSlice";
//import {selectSearchTerm} from "../searchBar/searchSlice";
import { Subreddit } from '../../components/Subreddit/Subreddit'
import './Subreddits.css';
import { setSearchTerm } from "../searchBar/searchSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const { isLoading } = useSelector((state) => state.subreddits);
  //const searchTerm = useSelector(selectSearchTerm);

  const onClickHandler = (e) => {
    dispatch(setButtonSubreddit(e.currentTarget.getAttribute('id')));
    dispatch(setSearchTerm(''));
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
    return (
      <div className="subreddits-outer-container">  
        <h3>SubReddits</h3>
        <div className="subreddits-container">
            {subreddits.map( (subreddit) => (
              <button id={subreddit.data.display_name_prefixed} onClick={onClickHandler}>
                <Subreddit 
                  class='subreddit' 
                  subreddit={subreddit} 
                  id={subreddit.data.title}
                />
              </button>))}          
        </div>    
      </div>
  );
};

