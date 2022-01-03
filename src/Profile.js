import React, {useState} from "react"
import profileImg from './sample/posts/profile2.png'
import img1 from './sample/posts/Rectangle 3.png'
import img2 from './sample/posts/Rectangle 4.png'
import img3 from './sample/posts/Rectangle 5.png'
import img4 from './sample/posts/Rectangle 6.png'
import './Profile.css'
import FollowBtn from "./FollowBtn"

function Profile() {
    const [isFollowing, setIsFollowing] = useState(true);
    
    return (
        <div id="container">
        <div id="dashboard">
            <img className="profileImg" src={profileImg} />
           <h2 className="profileName">Johnny Rose</h2>
           <p className="username">@johnnyrose</p>
           <p className="bio">This is my bio. I am the king of NFTs.</p>   
           <FollowBtn></FollowBtn>
        </div>
        <div id="gallery">
            <img className="galleryImg" src={img1} />
            <img className="galleryImg" src={img2} />
            <img className="galleryImg" src={img3} />
            <img className="galleryImg" src={img4} />
            <img className="galleryImg" src={img1} />
            <img className="galleryImg" src={img2} />
            <img className="galleryImg" src={img3} />
        </div>
        </div>
      );
}

export default Profile;
