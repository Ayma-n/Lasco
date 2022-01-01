import React, {useState} from "react"
import profileImg from './sample/posts/profile2.png'
import check from './sample/posts/check.svg'
import plus from './sample/posts/plus.svg'
import './Profile.css'
import FollowBtn from "./FollowBtn"

function Profile() {
    const [isFollowing, setIsFollowing] = useState(true);
    
    return (
        <div id="dashboard">
            <img className="profileImg" src={profileImg}></img>
           <h2 className="profileName">Johnny Rose</h2>
           <p className="username">@johnnyrose</p>
           <p className="bio">This is my bio. I am the king of NFTs.</p>   
           <FollowBtn></FollowBtn>
        </div>
      );
}

export default Profile;
