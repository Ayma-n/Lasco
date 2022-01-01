import React, {useState} from "react"
import profileImg from './sample/posts/profile2.png'
import check from './sample/posts/check.svg'
import plus from './sample/posts/plus.svg'
import './Profile.css'

function Profile() {
    const [isFollowing, setIsFollowing] = useState(true);
    
    return (
        <div id="dashboard">
            <img className="profileImg" src={profileImg}></img>
           <h2 className="profileName">Johnny Rose</h2>
           <p className="username">@johnnyrose</p>
           <p className="bio">This is my bio. I am the king of NFTs.</p>
           {!isFollowing && <button id="followBtn" onClick={() => setIsFollowing(true)}><img id="plus" src={plus} />
           Follow</button>}
           {isFollowing && <button id="followingBtn" onClick={() => setIsFollowing(false)}><img id="check" src={check} />
           Following</button>}
        </div>
      );
}

export default Profile;
