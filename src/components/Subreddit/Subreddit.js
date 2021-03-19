import React from 'react';
import './Subreddit.css';

export const Subreddit = ({subreddit}) => {
    return (
        <div className='subreddit'>
            <img></img>
            <p>{subreddit.data.title}</p>  
        </div>    
    )
}