import React, {useState, useEffect} from "react"
import profileImg from './sample/posts/profile2.png'
import img1 from './sample/posts/Rectangle 3.png'
import img2 from './sample/posts/Rectangle 4.png'
import img3 from './sample/posts/Rectangle 5.png'
import img4 from './sample/posts/Rectangle 6.png'
import './Profile.css'
import axios from 'axios';
import FollowBtn from "./FollowBtn"
import PortalNav from "./PortalNav"

function Profile() {
    const [isFollowing, setIsFollowing] = useState(true);
    // imported from pixelpalace
    const [seeEdit, setSeeEdit] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const [userData, setUserData] = useState("");
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [artForSale, setArtForSale] = useState(0);
    // functionTest();
    function handleFileChange(e) {
      console.log(e);
      console.log(e.target.value);
      console.log(e.target.files[0]);
    }
  
    // effect hook that gets user data; second param is blank array so that it is constant and getData only gets called once after render.
    useEffect(() => {
      getData();
    }, [artForSale])
  
    function countArt() {
      if (userData) {
        let count = 0;
        for (let i=0; i < userData.held_artwork.length; i++) {
          if (userData.held_artwork[i].for_sale ) {
            count += 1;
          }
        }
        return count
      }
    }
  
  
    async function getData() {
      let domain = "http://localhost:4010"
      let url = `${domain}/profile/johnnyrose`
      await axios.get(url).then((body)=> handleSetData(body)).catch((error) => {
          console.log("Get existing profile failed")
      })
      console.log(userData.profile_id);
      console.log(userData.held_artwork.length);
      console.log(userData.held_artwork[0].img_url);
  }
// sets user data in a hook, is called by async function
function handleSetData(body) {
    setUserData(body.data);
    // console.log(userData.held_artwork[1])
    setIsDataLoaded(true);
    setArtForSale(countArt())
  }
  function createList() {
    if (isDataLoaded) {
        var artList = [];
        for (let i = 0; i < userData.held_artwork.length; i++) {
          artList.append(<img className="galleryImg" src={userData.held_artwork[i].img_url} />);
      }
      return artList
      }
  }

    return (
        <div id="Profile">
        {/* <PortalNav></PortalNav> */}
        <div id="dashboard">
        {isDataLoaded && <img className="profileImg" src={userData.profile_picture} />}
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
            {/* {artList} */}
            {/* {isDataLoaded && <img className="galleryImg" src={userData.held_artwork[0].img_url} />} */}
            {/* {userData.held_artwork.map((val, key) => {
        return (<img className="galleryImg" src={val.img_url} />);
      })} */}

        </div>
        </div>
      );
}

export default Profile;
