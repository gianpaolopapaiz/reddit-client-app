import React from 'react';
import './Reddit.css';

export const Reddit = ({reddit}) => {
    return (
        <div className='reddit'>
            <h3>{reddit.data.title}</h3>
            <img className='reddit-img' src={reddit.data.url_overridden_by_dest} alt=''/>
            <div className='reddit-info'>
                <p className="reddit-author">Posted by <a className='reddit-author-link' href={`https://www.reddit.com/user/${reddit.data.author}/`} target='_blank'rel="noreferrer" >{reddit.data.author}</a></p>
                <div className='reddit-comments'>
                    <p>{`Comments: ${reddit.data.num_comments}`}</p>
                </div>
                <a className='reddit-button' href={`https://www.reddit.com/${reddit.data.permalink}`} target='_blank' rel="noreferrer"> View</a>
            </div>
            
        </div>    
    )
}