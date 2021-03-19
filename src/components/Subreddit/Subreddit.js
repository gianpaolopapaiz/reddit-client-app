import React from 'react';
import './Subreddit.css';

export const Subreddit = ({subreddit}) => {
    return (
        <div className='subreddit'>
            <p>{subreddit.data.title}</p>  
        </div>    
    )
}