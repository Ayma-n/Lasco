import React, { useState, useEffect } from "react";
import close from "../sample/posts/cancel-black.svg";
import fire from "../sample/posts/fire.svg";
import profileImg from "../sample/posts/profile2.png";
import testImg from "../sample/posts/viewArt.jpeg";
import comment from "../sample/posts/message-circle.svg";
import "../css/ViewPage.css";
import FollowBtn from './FollowBtn';


function ViewPage() {
  // use state for ability to see comments or not, is changed on click of comment icon
  const [seeComments, setSeeComments] = useState(false);

function setCommVis() {
  let value = seeComments ? 'block' : 'none';
  document.querySelector(".right").style.display = value;
}

useEffect( () => {
  setCommVis()
}, [seeComments]);

function handleCloseClick() {
  document.getElementById("ViewPage").style.display = 'none';
  const profile = document.getElementById("Profile");
  const portalNav = document.getElementById("PortalNav");
  // if the profile and nav bar exist, then toggle their blur class when the close btn is clicked
  if (profile && portalNav) {
    profile.classList.toggle("blur");
    portalNav.classList.toggle("blur");
  }

}

  return (
    <div id="ViewPage">
      <img id="close-btn" src={close} onClick={handleCloseClick} />
      <div id="modal">
        <div className="left">
          <div className="centered">
          {/* TODO: change name to image */}
          <div id="view-author-container" className="flex al-items-c">
            <img id="view-profile-img" className="profile-img" src={profileImg} />
            <div id="view-author-name" className="author-name" >Johnny R.</div>
            <FollowBtn />
          </div>
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
