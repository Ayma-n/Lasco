import React, { useState } from "react";
import close from "./sample/posts/close.svg";
import fire from "./sample/posts/fire.svg";
import profileImg from "./sample/posts/profile2.png";
import testImg from "./sample/posts/viewArt.jpeg";
import "./ViewPage.css";
function ViewPage() {
  return (
    <div id="ViewPage">
      <img id="close" src={close} />
      <div id="modal">
        <div className="left">
          <img id="artView" src={testImg} />
          <h1 id="artTitle">JungleCity</h1>
          <img src={fire} alt="fireIcon" id="like" />
          <p id="description">Lucious greens and blues drawn in Procreate.</p>
          <div id="priceAndBuy">
            <div id="price">$740</div>
            <button id="buyBtn">Buy</button>
          </div>
        </div>
        <div className="right">
          <div id="comments">
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Kathleen R.</span>Awesome artwork! Keep
                it up!
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
            <div className="commentDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              <p className="comment">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
