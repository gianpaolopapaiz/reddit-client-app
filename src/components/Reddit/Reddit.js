import React from 'react';
import './Reddit.css';

export const Reddit = ({reddit}) => {
    return (
        <div className='reddit'>
            <h3>{reddit.data.title}</h3>
            <img className='reddits-img' src={reddit.data.url_overridden_by_dest} alt=''/>
            <p>{reddit.data.author}</p>
            <p>{reddit.data.num_comments}</p>
            <p>{reddit.data.permalink}</p>
        </div>    
    )
}