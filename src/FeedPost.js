import React from 'react';
import astronight from './sample/posts/astronight.png'
import './FeedPost.css';

function FeedPost() {

    // This is just a sample image we get from the public folder
    // Basically, we will later update this variable with the image that the post should display.
    const postSrc= astronight;

    return (
    <>
        <div id="container">
            <div id="containerRect">
                <img id="postImage" src={postSrc}></img>
                <div id="authorContainer">
                    <p id="authorName">Johnny R.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default FeedPost