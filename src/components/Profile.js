import React, { useState, useEffect } from "react";
import profileImg from "../sample/posts/profile2.png";
import img1 from "../sample/posts/Rectangle 3.png";
import img2 from "../sample/posts/Rectangle 4.png";
import img3 from "../sample/posts/Rectangle 5.png";
import img4 from "../sample/posts/Rectangle 6.png";
import "../css/Profile.css";
import axios from "axios";
import FollowBtn from "./FollowBtn";
import PortalNav from "./PortalNav";
import ViewPage from "./ViewPage";
import { height } from "@mui/system";
import { useDb } from "../contexts/DatabaseContext";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [isFollowing, setIsFollowing] = useState(true);
  // imported from pixelpalace
  const [seeEdit, setSeeEdit] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [artForSale, setArtForSale] = useState(0);

  const navigate = useNavigate();

  // functionTest();
  function handleFileChange(e) {
    console.log(e);
    console.log(e.target.value);
    console.log(e.target.files[0]);
  }
  const { userInfo, updateDb, uploadArtDb } = useDb();
  const { currentUser } = useAuth();

  // effect hook that gets user data; second param is blank array so that it is constant and getData only gets called once after render.
  //TODO: remove
  useEffect(() => {
    getData();
  }, [artForSale]);

  function countArt() {
    if (userData) {
      let count = 0;
      for (let i = 0; i < userData.held_artwork.length; i++) {
        if (userData.held_artwork[i].for_sale) {
          count += 1;
        }
      }
      return count;
    }
  }

  async function getData() {
    // let domain = process.env.CLIENT_URL;
    // console.log("domain", domain)
    // let url = `/profile/test123`;
    // await axios
    //   .get(url)
    //   .then((body) => handleSetData(body))
    //   .catch((error) => {
    //     console.log("Get existing profile failed");
    //   });
    // console.log(userData.profile_id);
    // console.log(userData.held_artwork.length);
    // console.log(userData.held_artwork[0].img_url);
  }
  // sets user data in a hook, is called by async function
  function handleSetData(body) {
    setUserData(body.data);
    // console.log(userData.held_artwork[1])
    setIsDataLoaded(true);
    setArtForSale(countArt());
  }
  function createList() {
    if (isDataLoaded) {
      var artList = [];
      for (let i = 0; i < userData.held_artwork.length; i++) {
        artList.append(
          <img className="galleryImg" src={userData.held_artwork[i].img_url} />
        );
      }
      return artList;
    }
  }

  function handleImgClick() {
    document.getElementById("image").src =
      "https://hdwallpaperim.com/wp-content/uploads/2017/08/23/458235-digital_art-fantasy_art-painting-DeviantArt-bicycle-futuristic-clouds-building-city-flag-reflection-chair-surreal-colorful-musical_notes-birds.jpg";
    var width = document.getElementById("image").style.width;
    // document.getElementById('image').style.width = '300px';
    var height =
      (300 * document.getElementById("image").height) /
      document.getElementById("image").width;
    console.log("height: ", parseInt(height));
    if (height > width) {
      height = `${Math.min(parseInt(height), 500)}px`;
      width = (height * width) / document.getElementById("image").height;
    } else {
      width = `${Math.min(parseInt(width), 800)}px`;
    }
    console.log(width);
    document.getElementById("image").style.width = width;

    document.getElementById("ViewPage").style.display = "block";
    document.getElementById("Profile").classList.toggle("blur");
    document.getElementById("PortalNav").classList.toggle("blur");
  }

  // this fun gets file that was submitted, and uploads it to s3 db by calling helper fun in DBContext.
  async function uploadArt(e) {
    e.preventDefault();
    const file = document.getElementById("art-input").files[0];
    // calls uploadArt fun in DBContext, which uploads art file to s3 bucket and adds it to firestore db.
    console.log("file", file)
    await uploadArtDb(file);
    navigate(0);

    // console.log("waited")
    // console.log(userInfo)
    // window.location.reload();

    // const img = document.createElement("img")
    // img.src = imageUrl
    // document.getElementById("gallery").append(img)
  }

  // deletes img from firestore db and sends req to server to del from s3 bucket
  // TODO: ALSO DELETE ART FROM FIRESTORE
  async function handleDelImg(val) {
    // creates new list of art with art passed in removed
    const newArt = userInfo.artwork.filter((art) => art !== val);
    // updates db with new artwork
    updateDb({ artwork: newArt }, currentUser.uid);
    // await fetch("http://localhost:8454/deleteArt")
    await fetch(process.env.REACT_APP_SERVER_URL + "/delete-art", {
      method: "POST",
      body: JSON.stringify({ val: val }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }).then((text) => {
      return false;
    });
    navigate(0);
  }

  return (
    <>
      <ViewPage id="ViewPage" />
      <div id="Profile">
        {/* <PortalNav></PortalNav> */}

        <div id="dashboard">
          <div className="flex" id="profile-div">
            <Link to="/settings">
              <button>Edit Profile</button>
            </Link>
            {userInfo && <img className="profileImg" src={userInfo.photoURL} />}
            <button>Stats</button>
          </div>
          <form onSubmit={uploadArt}>
            <input id="art-input" type="file"></input>
            <button className="bg-red-800 hover:bg-red-1000 text-white hover:-translate-y-1 transition-all font-bold py-4 rounded-full shadow-lg text-2xl focus:bg-purple-500 relative sm:px-6">
              Upload
            </button>
          </form>
          {currentUser && <h1>{currentUser.displayName}</h1>}
          {userInfo && <h2 className="profileName">{userInfo.displayName}</h2>}
          {userInfo && <p className="username"> {`@${userInfo.username}`}</p>}
          {userInfo && <p className="bio">{userInfo.bio}</p>}
        </div>
        <div id="gallery">
          <img className="galleryImg" onClick={handleImgClick} src={img1} />
          <img className="galleryImg" src={img2} />
          <img className="galleryImg" src={img3} />
          <img className="galleryImg" src={img4} />
          <img className="galleryImg" src={img1} />
          <img className="galleryImg" src={img2} />
          <img className="galleryImg" src={img3} />
          {userInfo.artwork &&
            userInfo.artwork.map((val) => {
              return (
                <div key={val}>
                  <img
                    alt="gallery"
                    className="galleryImg"
                    onClick={handleImgClick}
                    src={val}
                  />
                  <button onClick={() => handleDelImg(val)}>Delete</button>
                </div>
              );
            })}
          {/* {artList} */}
          {/* {isDataLoaded && <img className="galleryImg" src={userData.held_artwork[0].img_url} />} */}
          {/* {userData.held_artwork.map((val, key) => {
        return (<img className="galleryImg" src={val.img_url} />);
      })} */}
        </div>
      </div>
    </>
  );
}

export default Profile;
