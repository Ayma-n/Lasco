import React, { useState } from 'react';
import homeIcon from './sample/posts/homeIcon.svg';
import searchIcon from './sample/posts/searchIcon.svg';
import profileIcon from './sample/posts/profileIcon.svg';
import './NavBar2.css';
import { useEffect } from 'react/cjs/react.development';

import HomeIcon from '@mui/icons-material/Home';

function NavBar2() {
    const [currentPage, setCurrentPage] = useState(0);
    const selecPosArray = [0, 78, 156];
    useEffect(() => {
        document.getElementById("purple-selector").style.left = selecPosArray[currentPage] + 'px';
    }, [currentPage]);
    

    return (<div id="NavBar2">
    <div id="purple-selector"></div>
    <div className="icon-div">
        {/* <img src={HomeIcon} alt="" id="home-icon" className='icon' onClick={() => setCurrentPage(0)} /> */}
        <HomeIcon id="home-icon" className='icon' onClick={() => setCurrentPage(0)}></HomeIcon>
        </div>
        <div className="icon-div">
        <img src={searchIcon} alt="" id="search-icon" className='icon' onClick={() => setCurrentPage(1)} />
        </div>
        <div className="icon-div">
        <img src={profileIcon} alt="" className="icon" id="profile-icon" onClick={() => setCurrentPage(2)}  />
        </div>
    </div>  );
}

export default NavBar2;