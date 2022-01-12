import React, { useState, useEffect } from "react";
import close from "./sample/posts/cancel-black.svg";
import fire from "./sample/posts/fire.svg";
import profileImg from "./sample/posts/profile2.png";
import testImg from "./sample/posts/viewArt.jpeg";
import comment from "./sample/posts/message-circle.svg";
import "./ViewPage.css";


function ViewPage() {
  // use state for ability to see comments or not, is changed on click of comment icon
  const [seeComments, setSeeComments] = useState(false);

function setCommVis() {
  let value = seeComments ? 'block' : 'none';
  document.querySelector(".right").style.display = value;
}

useEffect( () => {
  setCommVis()
}, [seeComments])

  return (
    <div id="ViewPage">
      <img id="close-btn" src={close} onClick={() => document.getElementById("modal").style.display = 'none'} />
      <div id="modal">
        <div className="left">
          <div className="centered">
          {/* TODO: change name to image */}
            <img id="image" src={testImg} />
            <div id="title-line">
            <img src={fire} alt="fire icon" id="like-icon" />
              <div id="title">JungleCity</div>
              <img src={comment} alt="comment icon" id="comment-icon" onClick={() => setSeeComments(seeComments => !seeComments)} />
            </div>
            <div id="description">
              Lucious greens and blues drawn in Procreate.
            </div>
            <div id="price-and-buy">
              <div id="price">$740</div>
              <button id="buy-btn">Buy</button>
            </div>
          </div>
        </div>
        <div className="right">
          <div id="comment-sec">
          <div className="comment">
            <div className="profile-img-div">
              <img src={profileImg} alt="profile" className="profile-img" />
            </div>
            <div className="comment-text">
              <span className="comment-name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          <div className="comment">
            <div className="profile-img-div">
              <img src={profileImg} alt="profile" className="profile-img" />
            </div>
            <div className="comment-text">
              <span className="comment-name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          <div className="comment">
            <div className="profile-img-div">
              <img src={profileImg} alt="profile" className="profile-img" />
            </div>
            <div className="comment-text">
              <span className="comment-name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          <div className="comment">
            <div className="profile-img-div">
              <img src={profileImg} alt="profile" className="profile-img" />
            </div>
            <div className="comment-text">
              <span className="comment-name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          <div className="comment">
            <div className="profile-img-div">
              <img src={profileImg} alt="profile" className="profile-img" />
            </div>
            <div className="comment-text">
              <span className="comment-name">Kathleen R.</span>Awesome artwork! Keep it
              up! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur vel maiores aut qui voluptas atque laboriosam ullam
              debitis ad nisi fugiat sunt quia, dolores aliquam iure harum
              numquam eaque, doloremque ducimus, quae cumque obcaecati! Ipsa
              nulla nobis voluptatem. Voluptas, numquam blanditiis quod
              repudiandae velit ad. Eos repellat ipsa enim assumenda ea.
              Perspiciatis exercitationem eligendi.
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
