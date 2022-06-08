import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import profileImg from '../sample/posts/profile2.png'
import img1 from '../sample/posts/Rectangle 3.png'
import img2 from '../sample/posts/Rectangle 4.png'
import img3 from '../sample/posts/Rectangle 5.png'
import img4 from '../sample/posts/Rectangle 6.png'
import '../css/Profile.css'
import axios from 'axios';
import FollowBtn from "./FollowBtn"
import PortalNav from "./PortalNav"
import ViewPage from "./ViewPage"
import { height } from "@mui/system"
import { useDb } from '../contexts/DatabaseContext'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { getAdditionalUserInfo } from 'firebase/auth';

function PublicProfile() {
  const navigate = useNavigate();
  const { user } = useParams();

  const { updateDb, uploadArtDb, getUIDfromUsername, getProfileData, userInfo, followUser } = useDb();
  const [publicUserInfo, setPublicUserInfo] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    getProfile();
  }, [])

  async function getProfile() {
    const UID = await getUIDfromUsername(user);
    if (UID === "") {
      navigate("/")
    }
    const profileData = await getProfileData(UID);
    setPublicUserInfo(profileData)
    console.log(profileData);
  }

  // TODO: create function that gets current user and updates db with username of this profile appended to his 'following' list
  //TODO: unfollow functionality
  // TODO: change updateDb to updateMyDb
  async function follow() {
    console.log("USERINFO", userInfo)
    await updateDb({following: [...userInfo.following, user]}, currentUser.uid)
    return followUser(user).then(res => console.log("res", res)).catch(err => console.error(err))
  }

  function handleImgClick() {
    document.getElementById("image").src = 'https://hdwallpaperim.com/wp-content/uploads/2017/08/23/458235-digital_art-fantasy_art-painting-DeviantArt-bicycle-futuristic-clouds-building-city-flag-reflection-chair-surreal-colorful-musical_notes-birds.jpg';
    var width = document.getElementById("image").style.width;
    // document.getElementById('image').style.width = '300px';
    var height = 300 * document.getElementById("image").height / document.getElementById("image").width;
    console.log("height: ", parseInt(height));
    if (height > width) {
      height = `${Math.min(parseInt(height), 500)}px`;
      width = height * width / document.getElementById("image").height
    }
    else {
      width = `${Math.min(parseInt(width), 800)}px`
    }
    console.log(width)
    document.getElementById("image").style.width = width;

    document.getElementById("ViewPage").style.display = 'block';
    document.getElementById("Profile").classList.toggle("blur");
    document.getElementById("PortalNav").classList.toggle("blur");
  }

  return (<>
    <ViewPage id="ViewPage" />
    <div id="Profile">
      <div id="dashboard">
        <div className="flex" id="profile-div">
          {publicUserInfo && <img className="profileImg" src={publicUserInfo.photoURL} />}
        </div>
        {currentUser && <h1>{currentUser.displayName}</h1>}
        {publicUserInfo && <h2 className="profileName">{publicUserInfo.displayName}</h2>}
        {publicUserInfo && <p className="username"> {`@${publicUserInfo.username}`}</p>}
        {publicUserInfo && <p className="bio">{publicUserInfo.bio}</p>}
        <FollowBtn></FollowBtn>
      </div>
      <div id="gallery">
        {publicUserInfo && publicUserInfo.artwork.map((artObj) => {
          return (<>
            <img className="galleryImg" onClick={handleImgClick} src={artObj.url} />
          </>)
        })}
        {/* {artList} */}
        {/* {isDataLoaded && <img className="galleryImg" src={userData.held_artwork[0].img_url} />} */}
        {/* {userData.held_artwork.map((val, key) => {
        return (<img className="galleryImg" src={val.img_url} />);
      })} */}

      </div>
    </div>
  </>);
}

export default PublicProfile;

