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
          <div className="centered">
            <img id="artView" src={testImg} />
            <div id="titleAndLike">
              <div id="artTitle">JungleCity</div>
              <img src={fire} alt="fireIcon" id="like" />
            </div>
            <div id="description">
              Lucious greens and blues drawn in Procreate.
            </div>
            <div id="priceAndBuy">
              <div id="price">$740</div>
              <button id="buyBtn">Buy</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="commentSec">
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
            </div>
            <div className="commentText">
              <span className="name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
            </div>
            <div className="commentText">
              <span className="name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
            </div>
            <div className="commentText">
              <span className="name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
            </div>
            <div className="commentText">
              <span className="name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            {/* <div className="commentDiv">
            <div className="profileImgDiv">
              <img src={profileImg} alt="profile" className="profileImg" />
              </div>
              <p className="commentText">
                <span className="name">Richard J.</span>I’d love to put this up
                in virtual gallery! Are you selling? ewsdfjdffdsdfsfdsfsddfsdfsfds
                sdfdsffdsdfsfdssfdsdsdsdsfdfdfsdsffdfdsfdfdfdfds
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
