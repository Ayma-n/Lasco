import React, { useState } from "react";
import check from "../sample/posts/check.svg";
import plus from "../sample/posts/plus.svg";
import "../css/FollowBtn.css";

function FollowBtn() {
  const [isFollowing, setIsFollowing] = useState(true);

  if (isFollowing) {
    return (
      <button id="followingBtn" onClick={() => setIsFollowing(false)}>
        <img id="check" src={check} />
        Following
      </button>
    );
  } else {
    return (
      <button id="followBtn" onClick={() => setIsFollowing(true)}>
        <img id="plus" src={plus} />
        Follow
      </button>
    );
  }
}

export default FollowBtn;
