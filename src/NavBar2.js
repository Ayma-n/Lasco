import React, { useState } from "react";
import "./NavBar2.css";
import { useEffect } from "react/cjs/react.development";

import FilledHomeIcon from "@mui/icons-material/Home";
import OutlinedHomeIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import OutlinedProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import FilledProfileIcon from '@mui/icons-material/AccountCircle';

function NavBar2() {
    const [currentPage, setCurrentPage] = useState(0);
    const [prevSelecElement, setPrevSelecElement] = useState();
    const selecPosArray = [0, 78, 156];
    const selecIconArray = ["home-icon", "search-icon", "profile-icon"];
    useEffect(() => {
        document.getElementById("purple-selector").style.left =
            selecPosArray[currentPage] + "px";
        document.getElementById(selecIconArray[currentPage]).style.color = "white";
        if (prevSelecElement) {
            prevSelecElement.style.color = "gray";
        }
    }, [currentPage]);

    function updateSelecElement(index) {
        setPrevSelecElement(document.getElementById(selecIconArray[currentPage]));
        setCurrentPage(index);
    }

    return (
        <div id="NavBar2">
            <div id="purple-selector"></div>
            {currentPage == 0 ? <FilledHomeIcon
                id="home-icon"
                className="icon"
                onClick={() => updateSelecElement(0)}
            ></FilledHomeIcon> : <OutlinedHomeIcon
                id="home-icon"
                className="icon"
                onClick={() => updateSelecElement(0)}
            ></OutlinedHomeIcon>}
            <SearchIcon
                className="icon-div"
                id="search-icon"
                className="icon"
                onClick={() => updateSelecElement(1)}
            ></SearchIcon>
            {currentPage == 2 ? <FilledProfileIcon
                className="icon"
                id="profile-icon"
                onClick={() => updateSelecElement(2)}
            /> : <OutlinedProfileIcon
                className="icon"
                id="profile-icon"
                onClick={() => updateSelecElement(2)}
            />}
        </div>
    );
}

export default NavBar2;
