import React from "react";
import astronight from "./sample/posts/astronight.png";
import profileImg from "./sample/posts/fakeProfileCircle.png";
import "./FeedPost.css";

function FeedPost() {
  // This is just a sample image we get from the public folder
  // Basically, we will later update this variable with the image that the post should display.
  const postSrc = astronight;

  return (
    <>
      <div id="container">
        <div id="containerRect">
          <img id="postImage" src={postSrc} />
          <div id="authorContainer">
            <img id="profileImg" src={profileImg} />
            <p id="authorName">Johnny R.</p>
          </div>
          <h1 id="artTitle">Astronight</h1>
          <div className="commentDiv">
            <img src={profileImg} className="commentImg" />
            <p className="commentText">Awesome artwork! Keep it up!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedPost;
